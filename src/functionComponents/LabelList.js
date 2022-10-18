import React, { useEffect } from "react";
import { Accordion, Table } from "react-bootstrap";
import { useGetLabelQuery } from "../redux/apiSlice";
import { addFilter, removeFilter } from "../redux/filtersSlice";
import { loadLabels } from "../redux/labelSlice";
import { connect, useDispatch, useSelector } from "react-redux";
import "../Labels.css";

export const LabelList = (props) => {
  const currentPage = useSelector((state) => state.currentPage.value);
  const {
    data: data,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLabelQuery({ page: currentPage });
  const filters = useSelector((state) => state.filters.filters[props.page]);

  const dispatch = useDispatch();
  const labelMap = {};
  useEffect(() => {
    if (data && data.content) {
      dispatch(loadLabels(data.content[0].labels));
    }
  });

  const getChild = (labelMap, id) => {
    return labelMap[id];
  };

  const showAll = (label) => {
    // dispatch(addFilter({ label: label._id, page: props.page }));
    label.childIds.forEach((child) =>
      dispatch(addFilter({ label: child, page: props.page }))
    );
  };

  const hideAll = (label) => {
    // dispatch(removeFilter(label._id));
    label.childIds.forEach((child) =>
      dispatch(removeFilter({ label: child, page: props.page }))
    );
  };

  const renderLabels = (data) => {
    data.content[0].labels.forEach((element) => {
      labelMap[element._id] = element;
    });
    return (
      <Accordion className="my-0">
        {data.content[0].labels
          .filter((item) => item.parent_id == null)
          .map((row, index) => {
            return (
              <Accordion.Item key={"label-display-" + row._id} eventKey={index}>
                <Accordion.Header>
                  <Label label={row} check={false}></Label>
                </Accordion.Header>
                <Accordion.Body className="px-1 py-2 labelBody">
                  <div className="list-group">
                    <Accordion.Item>
                      <p className="my-0">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          style={{ textTransform: "none" }}
                          onClick={() => {
                            showAll(row);
                          }}
                        >
                          Show all
                        </button>
                        <button
                          type="button"
                          className="mx-1 btn btn-secondary btn-sm"
                          style={{ textTransform: "none" }}
                          onClick={() => {
                            hideAll(row);
                          }}
                        >
                          Hide all
                        </button>
                      </p>
                    </Accordion.Item>
                    {row.childIds.map((child) => {
                      let label = getChild(labelMap, child);
                      return (
                        <Label
                          label={label}
                          extraClass="list-group-item"
                          key={child}
                          check={true}
                        ></Label>
                      );
                    })}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
      </Accordion>
    );
  };
  let Label = ({ label, extraClass, check }) => {
    const handleChange = (event) => {
      let label = labelMap[event.currentTarget.getAttribute("data-label-id")];
      if (label) {
        if (event.currentTarget.checked) {
          dispatch(addFilter({ label: label._id, page: props.page }));
        } else {
          dispatch(removeFilter({ label: label._id, page: props.page }));
        }
      }
    };
    let labelCheck = <></>;
    if (check) {
      labelCheck = (
        <input
          className="mx-1"
          type="checkbox"
          name={"label-check-" + label._id}
          data-label-id={label._id}
          checked={filters.indexOf(label._id) >= 0}
          onChange={handleChange}
        ></input>
      );
    }

    return (
      <div
        className={"labelName " + extraClass}
        key={"label-select-" + label._id}
      >
        <p className="my-0 nameLeft">
          {labelCheck}
          <span>{label.name}</span>
        </p>
        <p className="my-0 nameRight">{label.formattedAmount}</p>
      </div>
    );
  };

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = renderLabels(data, filters, dispatch);
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <>{content}</>;
};
