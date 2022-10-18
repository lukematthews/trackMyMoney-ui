import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { LabelList } from "../../functionComponents/LabelList";
import { SelectedLabels } from "../../functionComponents/SelectedLabels";
import { LabelAnalysis } from "./LabelAnalysis";

export default function LabelAnalysisPage() {
  return (
    <>
      <MDBCol size="3">
        <SelectedLabels page="labelAnalysis"></SelectedLabels>
        <LabelList page="labelAnalysis"></LabelList>
      </MDBCol>
      <MDBCol>
        <LabelAnalysis page="labelAnalysis"></LabelAnalysis>
      </MDBCol>
    </>
  );
}
