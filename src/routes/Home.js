import React from "react";
import { TransactionList } from "../transaction/components/TransactionList";
import { LabelList } from "../functionComponents/LabelList";
import { SelectedLabels } from "../functionComponents/SelectedLabels";
import { MDBCol } from "mdb-react-ui-kit";
import { PageButtons } from "../functionComponents/PageButtons";

export default function Home() {
  return (
    <>
      <MDBCol size="3">
        <SelectedLabels page="transactions"></SelectedLabels>
        <LabelList page="transactions"></LabelList>
      </MDBCol>
      <MDBCol>
        <PageButtons></PageButtons>
        <TransactionList page="transactions"></TransactionList>
      </MDBCol>
    </>
  );
}
