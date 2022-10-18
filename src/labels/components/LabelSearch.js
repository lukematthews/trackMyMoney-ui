import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import DataListInput from "react-datalist-input";
import { useDispatch, useSelector } from "react-redux";
import LabelService from "../service/LabelService.js";
import { setOpenSearch, setLabel } from "../../redux/labelConfigSlice.js";

export const LabelSearch = () => {
  const [labels, setLabels] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(false);

  const dispatch = useDispatch();
  const show = useSelector((state) => state.labelConfigSlice.openSearch);
  const searchLabel = {};
  let searchValue = "";
  let searchItem = {};

  useEffect(() => {
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
  }, []);

  const openLabel = (label) => {
    showLabel(dispatch).then(() => dispatch(setLabel(label)));
  };

  const showLabel = (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch(setLabel(null));
      resolve();
    });

  const toggleShow = () => {
    dispatch(setOpenSearch(!show));
  };

  const setSearchValue = (selectedLabel) => {
    let label = labels.find((item) => selectedLabel.label === item.name);
    searchValue = selectedLabel.label;
    searchItem = selectedLabel.model;
    setSelectedLabel(label);
  };

  return (
    <>
      <MDBModal staticBackdrop show={show}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader className="bg-primary">
              <MDBModalTitle>Select Label</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label htmlFor="label-parent-id" className="form-label">
                  Label name
                </label>
                <DataListInput
                  placeholder="Type to search..."
                  items={
                    labels
                      ? labels.map((item) => {
                          return {
                            label: item.name,
                            key: item._id,
                            model: item,
                          };
                        })
                      : []
                  }
                  onSelect={setSearchValue}
                />
              </form>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn
                onClick={() => {
                  toggleShow();
                  openLabel(selectedLabel);
                }}
              >
                Load
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
