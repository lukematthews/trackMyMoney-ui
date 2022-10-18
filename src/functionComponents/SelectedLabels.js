import { connect, useDispatch, useSelector } from "react-redux";
import { removeFilter } from "../redux/filtersSlice";
import { Badge } from "react-bootstrap";
import { XCircleFill } from "react-bootstrap-icons";
import { useEffect } from "react";

export const SelectedLabels = (props) => {
  const filters = useSelector((state) => {
    // return state.filters.filters;
    return state.filters.filters[props.page];
  });
  const labels = useSelector((state) => {
    return state.labels.labels;
  });
  const labelMap = {};
  if (labels) {
    labels.forEach((item) => {
      labelMap[item._id] = item;
    });
  }
  const dispatch = useDispatch();
  const renderFilters = () => {
    return (
      <>
        {Object.values(filters).map((filter) => {
          return (
            <Badge className="py-1 m-1" key={"filterLabel-" + filter}>
              <span
                // onClick={() => dispatch(removeFilter(filter))}
                onClick={() =>
                  dispatch(removeFilter({ page: props.page, label: filter }))
                }
                className="px-1"
                data-filter-id={filter}
              >
                <XCircleFill color="white"></XCircleFill>
              </span>
              {labelMap[filter].name}
            </Badge>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="card-body selectedLabelsTitle pb-1">
        <h5 className="card-title text-white">Selected Labels</h5>
      </div>
      <div className="card-body bg-dark">{renderFilters()}</div>
    </>
  );
};

export default connect()(SelectedLabels);
