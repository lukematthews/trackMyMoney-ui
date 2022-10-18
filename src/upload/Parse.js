import { MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { endpoints } from "../redux/apiSlice";
import TransactionService from "../transaction/service/TransactionService";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export const Parse = () => {
  const [parsed, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [deletedPOSAuthorisations, setdeletedPOSAuthorisationsMessage] =
    useState("");
  const dispatch = useDispatch();

  const handleMessageChange = (event) => {
    // 👇️ update textarea value
    let original = event.target.value;

    original = original.replace(/\n\n/g, " ");
    original = original.replace(/\n(\d\d\ ...)/g, "\n$1, ");
    original = original.replace(/^(\d\d\ ...)/g, "$1, ");
    original = original.replace(/[\t]\$/g, ", -");
    original = original.replace(/\t\n/g, "\n");
    const transactions = [...original.matchAll(/.*\n/g)];
    let parsedFull = "";
    transactions.forEach((transaction) => {
      console.log(transaction);
      let details = transaction[0].split(", ");
      let parsed = [];
      let transactionDate = new Date(details[0]);
      parsed[0] =
        padNumber(transactionDate.getDate()) +
        "/" +
        padNumber(transactionDate.getMonth() + 1) +
        "/2022";
      parsed[1] = details[2];
      parsed[1] = parsed[1].replace("\n", "");
      parsed[2] = details[1];
      parsedFull = parsedFull.concat(
        parsed[0] + ", " + parsed[1] + ", " + parsed[2] + "\n"
      );
      console.log(parsed);
    });

    setMessage(parsedFull);
  };

  const padNumber = (value) => {
    return value < 10 ? "0" + value : "" + value;
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(endpoints.uploadTransactions.initiate(parsed));
    } catch (err) {
      console.log(err);
    }
  };

  let deleteAuthorisations = (e) => {
    TransactionService.deletePOSAuthorisations().then((response) => {
      console.log(response.data);
      setdeletedPOSAuthorisationsMessage(response.data);
      setOpen(true);
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MDBCol>
      <p className="fs-6">
        Copy the "Outstanding Authorisations" in here, it will format them as
        CSV for upload.
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleMessageChange}
          className="w-100"
          style={{ height: "200px" }}
        ></textarea>
        <textarea
          value={parsed}
          readOnly
          className="w-100"
          style={{ height: "200px" }}
        ></textarea>
        <MDBBtn>Upload</MDBBtn>
        <MDBBtn
          className="mx-1 btn-danger"
          type="button"
          onClick={deleteAuthorisations}
        >
          Delete POS Authorisations
        </MDBBtn>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Deleted POS Authorisations"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {deletedPOSAuthorisations}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </MDBCol>
  );
};
