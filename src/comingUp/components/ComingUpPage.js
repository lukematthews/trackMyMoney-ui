import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
} from "mdb-react-ui-kit";

export const ComingUpPage = () => {
  return (
    <MDBCol>
      <MDBRow>
        <MDBCol>
          <h1 className="mt-3">Coming Up</h1>
          <p className="fs-6">
            When are you getting paid? What bills are due in this period? What
            are your average expenses? Is there anything else coming up over the
            period? Then - are you ok?
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow></MDBRow>
    </MDBCol>
  );
};
