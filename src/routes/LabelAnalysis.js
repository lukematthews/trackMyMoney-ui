import React from "react";
import { LabelAnalysisPage } from "../laabelAnalysis/components/LabelAnalysisPage";
import { LabelList } from "../functionComponents/LabelList";
import { SelectedLabels } from "../functionComponents/SelectedLabels";
import { MDBCol } from "mdb-react-ui-kit";

export default function Home() {
  return (
    <>
      <MDBCol size="3">
        <SelectedLabels page="labelAnalysis"></SelectedLabels>
        <LabelList page="labelAnalysis"></LabelList>
      </MDBCol>
      <MDBCol>
        <LabelAnalysisPage></LabelAnalysisPage>
      </MDBCol>
    </>
  );
}
