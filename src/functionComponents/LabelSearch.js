import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { setLabel } from "./redux/labelConfigSlice";
import { useGetLabelSearchQuery } from "./redux/apiSlice";

export const LabelSearch = () => {
  const [show, setShow] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(false);
  const {
    data: data,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLabelSearchQuery();

  const searchLabels = data;
  const dispatch = useDispatch();
  const searchLabel = {};
  let searchValue = "";
  let searchItem = {};

  const toggleShow = () => {
    setShow(!show);
  };
  const setSearchValue = (selectedLabel) => {
    let label = searchLabels.find((item) => selectedLabel.label === item.name);
    searchValue = selectedLabel.label;
    searchItem = selectedLabel.model;
    setSelectedLabel(label);
  };

  return (
    <>
      <MDBBtn onClick={toggleShow}>Search for existing label</MDBBtn>
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
                    searchLabels
                      ? searchLabels.map((item) => {
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
                  dispatch(setLabel(selectedLabel));
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
