import { useEffect, useState } from "react";
import "./AddLabelToTransaction.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { LabelDialog } from "../labels/components/LabelDialog";
import { useDispatch } from "react-redux";
import {
  setLabel,
  setOpenSearch,
  setTransaction,
} from "../redux/labelConfigSlice";

export const AddLabelToTransaction = (props) => {
  const transaction = props.transaction;
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const showLabel = (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch(setLabel(null));
      resolve();
    });

  const addLabel = (event) => {
    const labelTemplate = {
      _id: -1,
      name: "",
      labelType: "NONE",
      patterns: [],
      childIds: [],
      parent_id: -1,
    };
    handleClose();
    showLabel(dispatch).then(() => {
      dispatch(setTransaction(transaction));
      dispatch(setLabel(labelTemplate));
    });
  };

  const updateLabel = (event) => {
    dispatch(setTransaction(transaction));
    dispatch(setOpenSearch(true));
  };

  return (
    <>
      {transaction.labelId < 0 ? (
        <a className="addLabelButton" onClick={handleClick}>
          <AddCircleOutlineIcon />
        </a>
      ) : (
        <></>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={updateLabel}>
              <ListItemText>Add to existing</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={addLabel}>
              <ListItemText>Create new</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

export default AddLabelToTransaction;
