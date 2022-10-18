import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import LabelService from "../service/LabelService";
import MatchedTransactions from "./MatchedTransactions";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableContainer,
  Button,
} from "@mui/material";
import {
  setLabel,
  setTransaction,
  fireLabelUpdated,
} from "../../redux/labelConfigSlice";
import { Form, Field } from "react-final-form";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

export const LabelDialog = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [reRender, setReRender] = useState(false);
  const label = useSelector((state) => state.labelConfigSlice.label);
  const fullWidth = false;
  const dispatch = useDispatch();
  const labelTypes = useSelector((state) => {
    return state.labelConfigSlice.labelTypes;
  });
  const transaction = useSelector((state) => {
    return state.labelConfigSlice.transaction;
  });
  const childLabels = useRef([]);
  const parentsRef = useRef([]);

  useEffect(() => {
    if (label) {
      retrieveParents();
      fetchChildren(label);
      setShowDetails(true);
    }
  }, [label]);

  const saveLabel = (values) => {
    console.log(values);
    if (label.id) {
      // save it...
      LabelService.update(values._id, values);
    } else {
      // create the label...
      LabelService.create(values);
    }
    dispatch(setLabel(null));
    PubSub.publish("LABEL_UPDATED", values);
    setShowDetails(false);
  };

  const cancel = (form) => {
    childLabels.current = [];
    form.reset();
    setShowDetails(false);
    dispatch(setTransaction(null));
    dispatch(setLabel(null));
  };

  const fetchChildren = (label) => {
    if (label && childLabels.current.length < label.childIds.length) {
      let childFetch = [];
      let getCount = 0;
      label.childIds.map((childId) => {
        LabelService.get(childId)
          .then((response) => {
            childFetch.push(response.data);
            getCount = getCount + 1;
            if (getCount == label.childIds.length) {
              childLabels.current = childFetch;
              setReRender(!reRender);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      });
    }
  };

  const openLabel = (id) => {
    let child = childLabels.current.find((child) => child._id === id);
    showLabel(dispatch).then(() => dispatch(setLabel(child)));
  };

  const showLabel = (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch(setLabel(null));
      resolve();
    });

  const retrieveParents = () => {
    if (parentsRef.current.length == 0) {
      LabelService.parentLabels()
        .then((response) => {
          parentsRef.current = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return label ? (
    <>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={"800px"}
        open={showDetails}
        onClose={() => setShowDetails(false)}
      >
        <DialogTitle className="bg-dark text-light">
          {label.name ? label.name : "Create Label"}
        </DialogTitle>
        <DialogContentText></DialogContentText>
        <Form
          onSubmit={saveLabel}
          initialValues={label}
          mutators={{
            ...arrayMutators,
          }}
          render={({
            handleSubmit,
            form: {
              mutators: { push, pop },
            },
            submitting,
            pristine,
            form,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogContent>
                {transaction && Object.keys(transaction).length > 0 ? (
                  <div className="mb-3">
                    <Card variant="outlined">
                      <CardHeader title="Transaction" />
                      <CardContent>
                        <TableContainer>
                          <Table>
                            <TableBody>
                              <TableRow>
                                <TableCell className="transactionText">
                                  {transaction.viewDate}
                                </TableCell>
                                <TableCell className="transactionText">
                                  {transaction.viewAmount}
                                </TableCell>
                                <TableCell className="transactionText">
                                  {transaction.description}
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <></>
                )}
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" htmlFor="name">
                    Name
                  </label>
                  <div className="col-sm-10">
                    <Field
                      className="form-control"
                      name="name"
                      component="input"
                      type="text"
                      placeholder="Label Name"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" htmlFor="name">
                    Type
                  </label>
                  <div className="col-sm-2">
                    <Field
                      className="form-control"
                      name="labelType"
                      component="select"
                    >
                      {Object.keys(labelTypes).map((labelType) => {
                        return (
                          <option key={labelType} value={labelType}>
                            {labelTypes[labelType][0]}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" htmlFor="name">
                    Parent
                  </label>
                  <div className="col-sm-10">
                    <Field
                      className="form-control"
                      name="parent_id"
                      component="select"
                    >
                      <option value="-1"></option>
                      {parentsRef.current.map((parent) => {
                        return (
                          <option key={parent._id} value={parent._id}>
                            {parent.name}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                </div>
                <div className="mb-3">
                  <Card>
                    <CardHeader title="Children" />
                    <CardContent>
                      {childLabels.current.length > 0 ? (
                        childLabels.current.map((child) => {
                          return (
                            <a
                              className="mx-1"
                              key={child._id}
                              onClick={() => openLabel(child._id)}
                              style={{ cursor: "pointer" }}
                            >
                              {child.name}
                            </a>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </CardContent>
                  </Card>
                </div>
                <div className="mb-3">
                  <Card>
                    <CardHeader title="Matches" />
                    <CardContent>
                      <p>
                        What words need to be in the description of a
                        transaction for it to be part of this label? The first
                        20 matches will be shown to show you what the impacts
                        are.
                      </p>
                      <Button
                        type="button"
                        style={{ marginBottom: "5px" }}
                        onClick={() =>
                          push("patterns", {
                            id: -1,
                            pattern: "",
                            useRegex: false,
                          })
                        }
                      >
                        Add
                      </Button>
                      <FieldArray name="patterns">
                        {({ fields }) =>
                          fields.map((name, index) => (
                            <div key={name} style={{ marginBottom: "5px" }}>
                              <Field
                                name={`${name}.pattern`}
                                component="input"
                                placeholder="Pattern"
                              />
                              <span
                                onClick={() => fields.remove(index)}
                                style={{ cursor: "pointer" }}
                              >
                                ❌
                              </span>
                            </div>
                          ))
                        }
                      </FieldArray>
                    </CardContent>
                  </Card>
                </div>
                <MatchedTransactions label={values}></MatchedTransactions>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={submitting || pristine}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  type="button"
                  onClick={() => cancel(form)}
                >
                  Cancel
                </Button>
              </DialogActions>
            </form>
          )}
        />
      </Dialog>
    </>
  ) : (
    <></>
  );
};
