import React, { useState, useEffect, useRef } from "react";
import LabelService from "../service/LabelService.js";
import { MDBBtn, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLabel } from "../../redux/labelConfigSlice.js";
import { DataGrid } from "@mui/x-data-grid";
import { LabelDialog } from "./LabelDialog.js";
import { Button } from "@mui/material";

const LabelConfigList = (props) => {
  const [labels, setLabels] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const labelsRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  labelsRef.current = labels;

  const [showDetails, setShowDetails] = useState(false);
  const [labelEdit, setLabelEdit] = useState(null);
  const labelTypes = useSelector((state) => {
    return state.labelConfigSlice.labelTypes;
  });
  const label = useSelector((state) => state.labelConfigSlice.label);

  const patternNames = (params) => {
    // let patternDisplay = "";
    // params.row.patterns.forEach((pattern) => {
    //   patternDisplay = patternDisplay + pattern.pattern + ", ";
    // });
    // return patternDisplay;
    return params.row.patterns.map((pattern) => pattern.pattern).join(", ");
  };

  const totalAmount = (params) => {
    return params.row.formattedAmount;
  };

  useEffect(() => {
    retrieveLabels();
  }, [label]);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveLabels = () => {
    LabelService.getAll()
      .then((response) => {
        response.data.forEach((label) => {
          label.id = label._id;
        });
        setLabels(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getLabelById = (id) => {
    const label = labelsRef.current.find((label) => label._id === id);
    if (label === undefined) {
      return { name: "" };
    }
    return label;
  };

  const refreshList = () => {
    retrieveLabels();
  };

  const findByName = () => {
    LabelService.findByName(searchTitle)
      .then((response) => {
        response.data.forEach((label) => {
          label.id = label._id;
        });
        setLabels(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openLabel = (params) => {
    showLabel(dispatch).then(() => dispatch(setLabel(params.row)));
  };

  const showLabel = (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch(setLabel(null));
      resolve();
    });

  const addLabel = (event) => {
    const labelTemplate = {
      _id: -1,
      name: "",
      labelType: "NONE",
      patterns: [],
      childIds: [],
      parent_id: -1,
    };
    showLabel(dispatch).then(() => dispatch(setLabel(labelTemplate)));
  };

  const deleteLabel = (rowIndex) => {
    const id = labelsRef.current[rowIndex].id;

    LabelService.remove(id)
      .then((response) => {
        navigate("/labels");
        let newLabels = [...labelsRef.current];
        newLabels.splice(rowIndex, 1);

        setLabels(newLabels);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getParentName = (params) => {
    return getLabelById(params.row.parent_id).name;
  };

  const getLabelType = (params) => {
    if (params.row.labelType === "NONE") {
      return "-";
    }
    if (labelTypes) {
      return labelTypes[params.row.labelType];
    }
    return params.row.labelType;
  };

  const labelColumns = [
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "labelType",
      headerName: "Type",
      valueGetter: getLabelType,
    },
    {
      field: "parent_id",
      headerName: "Parent",
      valueGetter: getParentName,
      width: 200,
    },
    {
      field: "patterns",
      headerName: "Patterns",
      valueGetter: patternNames,
      width: 400,
    },
    {
      field: "totalAmount",
      headerName: "Balance",
      valueGetter: totalAmount,
      width: 400,
    },
  ];

  return (
    <>
      <MDBRow>
        <MDBCol className="mb-3 col-md-8 form-inline">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchTitle}
              onChange={onChangeSearchTitle}
              onKeyDown={(e) => {
                e.key === "Enter" ? findByName() : () => {};
              }}
            />
            <div className="input-group-append">
              <Button
                variant="contained"
                className="mx-2 mb-1"
                type="submit"
                onClick={findByName}
              >
                Search
              </Button>
              <Button variant="contained" className="mb-1">
                View Selected
              </Button>
              <Button
                variant="contained"
                className="mx-2 mb-1"
                onClick={addLabel}
              >
                Add New
              </Button>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol style={{ height: "70vh" }}>
          <DataGrid
            rows={labels}
            columns={labelColumns}
            onRowClick={openLabel}
            checkboxSelection
            disableSelectionOnClick={true}
          ></DataGrid>
          <LabelDialog
            showDetails={showDetails}
            label={labelEdit}
          ></LabelDialog>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default LabelConfigList;
