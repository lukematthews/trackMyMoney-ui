import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import LabelService from "../service/LabelService";
export const LabelAnalysis = (props) => {
  const filters = useSelector((state) => {
    return state.filters.filters[props.page];
  });
  const [reports, setReports] = useState([]);
  const reportsRef = useRef([]);

  useEffect(() => {
    reportsRef.current = [];
    filters.forEach((filter) => {
      LabelService.get(filter).then((result) => {
        reportsRef.current.push(result.data);
        // setReports(reportsRef.current);
      });
    });
  }, []);

  let Analysis = () => {
    return (
      <>
        {reportsRef.current.map((filter) => (
          <div key={"analysis-" + filter.label.name}>
            <MDBRow key={"analysis-" + filter.label.id}>
              <MDBCol>{filter.label.name}</MDBCol>
              <MDBCol>Report Details...</MDBCol>
            </MDBRow>
          </div>
        ))}
      </>
    );
  };

  return <Analysis></Analysis>;
};
