import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Parse } from "./Parse";
import Upload from "./Upload";

export const UploadPage = () => {
  return (
    <>
      <MDBRow>
        <MDBCol>
          <MDBCard>
            <MDBCardHeader>File</MDBCardHeader>
            <MDBCardBody>
              <div>
                Download transactions from your internet banking as CSV and drop
                the file here.
              </div>
              <Upload></Upload>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBRow className="vh-100">
            <MDBCol>
              <MDBCard>
                <MDBCardHeader>Outstanding Authorisations</MDBCardHeader>
                <MDBCardBody>
                  <p>
                    For some banks, only the cleared transactions are downloaded
                    and the current uncleared transactions are available on the
                    display of the internet banking. This allows you to copy the
                    data from the web page and parses it so it can be uploaded.
                  </p>
                  <p>
                    A catch here is that the description may change between the
                    web page and what it is when it is downloaded (cleared). The
                    delete "POS Authorisations" deletes any transactions that
                    are marked as authorisations
                  </p>

                  <Parse></Parse>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </>
  );
};
