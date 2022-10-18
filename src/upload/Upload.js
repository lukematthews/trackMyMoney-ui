import { useRef, useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
} from "mdb-react-ui-kit";
import { PropagateLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faXmarkSquare,
} from "@fortawesome/free-solid-svg-icons";

const Upload = (props) => {
  const [file, setFile] = useState(null);
  const [bank, setBank] = useState("ANZ");
  const [loading, setLoading] = useState(true);
  const loadingResponse = useRef({});
  const [dialogVisible, setDialogVisible] = useState(false);
  const columnLayouts = {
    ANZ: "Column layout: <date(dd/mm/yyyy)>,<amount (decimal, no dollar signs)><description>",
    ING: "Column layout: <date(dd/mm/yyyy)>,<description>,<credit>,<debit>,<balance (not used)>",
  };
  const [selectedBankLayout, setLayout] = useState(columnLayouts.ANZ);
  // let selectedBankLayout = columnLayouts.ANZ;

  const http = axios.create({
    baseURL: "http://localhost:8081/api/",
    headers: {
      "Content-type": "application/json",
    },
  });

  const renderStatus = () => {
    if (loading == true) {
      return <PropagateLoader />;
    }
    let statusIcon = faCircleCheck;
    let color = "green";
    if (loadingResponse.current.status === "FAILED") {
      statusIcon = faXmarkSquare;
      color = "red";
    }
    return (
      <FontAwesomeIcon icon={statusIcon} size="6x" style={{ color: color }} />
    );
  };

  const handleSubmit = (event) => {
    loadingResponse.current = {};
    setDialogVisible(true);
    setLoading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append("uploadFile", file);
    formData.append("bank", bank);

    http
      .post("do-upload", formData)
      .then((response) => {
        loadingResponse.current = response.data;
        loadingResponse.current.errorMessage = "";
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        loadingResponse.current.status = "FAILED";
        loadingResponse.current.errorMessage = error.response.data.message;
        setLoading(false);
      });
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  return (
    <>
      <div>
        <MDBModal
          staticBackdrop
          show={dialogVisible}
          setShow={setDialogVisible}
        >
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>Loading transactions</MDBModalHeader>
              <MDBModalBody style={{ textAlign: "center" }} className="mb-4">
                <div
                  style={{
                    width: "90%",
                    height: "90%",
                    margin: "5%",
                    alignItems: "center",
                    display: "flex",
                    flex: "0 0 auto",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {renderStatus()}
                </div>
                <div>{loadingResponse.current.errorMessage}</div>
                <table
                  className="table"
                  style={{ margin: "5%", textAlign: "left", width: "90%" }}
                >
                  <tbody>
                    <tr>
                      <td>Successful</td>
                      <td>{loadingResponse.current.successCount}</td>
                    </tr>
                    <tr>
                      <td>Failed</td>
                      <td>{loadingResponse.current.failedCount}</td>
                    </tr>
                    <tr>
                      <td>Duplicate</td>
                      <td>{loadingResponse.current.duplicateCount}</td>
                    </tr>
                    <tr>
                      <td>Amount</td>
                      <td>{loadingResponse.current.amount}</td>
                    </tr>
                  </tbody>
                </table>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn disabled={loading} onClick={closeDialog}>
                  Ok
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
        <form className="px-4 py-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="bankSelect">Bank</label>
            <select
              id="bankSelect"
              className="form-control"
              onChange={(e) => {
                setBank(e.target.value);
                setLayout(columnLayouts[e.target.value]);
              }}
            >
              <option>ANZ</option>
              <option>ING</option>
            </select>
            <div id="fileColumnHelp" class="form-text">
              {selectedBankLayout}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1">File</label>
            <input
              type="file"
              className="form-control"
              id="exampleDropdownFormEmail1"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button type="submit" className="my-3 btn btn-primary">
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default Upload;
