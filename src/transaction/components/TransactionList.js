import React, { useEffect, useState } from "react";
import { apiSlice, useGetMonthQuery } from "../../redux/apiSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../../redux/totalPagesSlice";
import AddLabelToTransaction from "../../functionComponents/AddLabelToTransaction";
import { LabelDialog } from "../../labels/components/LabelDialog";
import { setLabel } from "../../redux/labelConfigSlice";
import { LabelSearch } from "../../labels/components/LabelSearch";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { display } from "@mui/system";
import { useTheme } from "@mui/material";
import PubSub from "pubsub-js";

export const TransactionList = (props) => {
  const [expanded, setExpanded] = useState(true);
  const [labelUpdated, setLabelUpdated] = useState(false);
  const currentPage = useSelector((state) => {
    return state.currentPage.value;
  });
  const filters = useSelector((state) => {
    return state.filters.filters[props.page];
  });
  const labelUpdatedSelector = useSelector((state) => {
    return state.labelConfigSlice.updated;
  });

  const {
    data: data,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetMonthQuery({ page: currentPage });
  const dispatch = useDispatch();
  const theme = useTheme();

  const refreshTransactions = () => {
    console.log("fetching transactions");
    refetch();
  };

  PubSub.subscribe("LABEL_UPDATED", refreshTransactions);

  useEffect(() => {
    if (data && data.totalPages) {
      dispatch(set(data.totalPages));
    }
  });

  const isVisible = (transaction) => {
    if (filters.length == 0) {
      return true;
    }
    if (filters && filters.indexOf(transaction.labelId) >= 0) {
      return true;
    }
    return false;
  };

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
    showLabel(dispatch).then(() => dispatch(setLabel(labelTemplate)));
  };

  let Transaction = ({ transaction }) => {
    return (
      <TableRow hover>
        <TableCell
          sx={{ paddingTop: "0px", paddingBottom: "0px" }}
          className="transactionText text-end"
        >
          {transaction.viewAmount}
        </TableCell>
        <TableCell sx={{ padding: "0px" }}>
          <a
            tabIndex="0"
            className="badge bg-primary btn transactionText"
            role="button"
            data-bs-toggle="popover"
            data-bs-trigger="focus"
            title=""
            data-bs-original-title="Label options"
            data-label-id={transaction.labelId}
          >
            {transaction.viewLabel}
          </a>
          <AddLabelToTransaction
            transaction={transaction}
          ></AddLabelToTransaction>
        </TableCell>
        <TableCell className="transactionText" sx={{ padding: "0px" }}>
          {transaction.description}
        </TableCell>
      </TableRow>
    );
  };

  const renderTransactions = (month, filters) => {
    return (
      <>
        {month.content.map((item, index) => (
          <Accordion key={"month-" + index} expanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: theme.palette.primary.main,
                margin: "0px",
              }}
            >
              <Typography>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    paddingRight: "10px",
                  }}
                >
                  {item.display}
                </span>
                <span>{`Spent: ${item.debitAmount} Earnt: ${item.creditAmount}`}</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 200 }} aria-label="spanning table">
                  <TableHead></TableHead>
                  {item.weeks.map((week, index) => (
                    <TableBody key={"week-" + week.weekId}>
                      <TableRow
                        sx={{
                          padding: "8px",
                          backgroundColor: theme.palette.grey[700],
                          fontWeight: "bold",
                        }}
                      >
                        <TableCell colSpan={3}>{week.displayWeek}</TableCell>
                      </TableRow>
                      {week.days.map((day, index) => (
                        <React.Fragment key={"day-" + day.dayId}>
                          <TableRow
                            sx={{ backgroundColor: theme.palette.grey[600] }}
                            key={"day-" + day.dayId}
                          >
                            <TableCell
                              colSpan={3}
                              style={{ fontWeight: "bold", padding: "5px" }}
                            >
                              {day.displayDate}
                            </TableCell>
                          </TableRow>
                          {day.transactions
                            .filter(isVisible)
                            .map((transaction, index) => (
                              <Transaction
                                key={"transaction-" + transaction.id}
                                transaction={transaction}
                              ></Transaction>
                            ))}
                        </React.Fragment>
                      ))}
                    </TableBody>
                  ))}
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        ))}
        <LabelDialog></LabelDialog>
        <LabelSearch></LabelSearch>
      </>
    );
  };

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = renderTransactions(data, filters);
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <>{content}</>;
};
