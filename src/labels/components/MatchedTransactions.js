import { width } from "@mui/system";
import { useCallback, useEffect, useRef, useState } from "react";
import { PropagateLoader } from "react-spinners";
import LabelService from "../service/LabelService";
import { debounce } from "lodash";
import {
  Card,
  CardHeader,
  CardContent,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
} from "@mui/material";

export default function MatchedTransactions(props) {
  const patterns = props.label.patterns;

  const [reRender, setReRender] = useState(false);
  const loadingRef = useRef(false);
  const matchesRef = useRef([]);
  const fetchMatches = () => {
    if (patterns.length == 0) {
      return;
    }
    LabelService.matchTransactions(patterns).then((response) => {
      renderTransaction(response.data);
      setReRender(!reRender);
    });
  };

  const delayedMatches = useCallback(debounce(fetchMatches, 1000), [patterns]);

  const renderTransaction = (matchTransaction) => {
    loadingRef.current = false;
    matchesRef.current = matchTransaction.transactions;
  };

  useEffect(() => {
    if (Array.isArray(patterns) && patterns.length > 0) {
      loadingRef.current = true;
      renderTransaction({ transactions: [] });
      delayedMatches();
    } else {
      renderTransaction({ transactions: [] });
    }
    return delayedMatches.cancel;
  }, [matchesRef.current, delayedMatches]);

  return (
    <Card>
      <CardHeader title="Matched Transactions" />
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell scope="col">Date</TableCell>
                <TableCell scope="col">Amount</TableCell>
                <TableCell scope="col">Existing labels</TableCell>
                <TableCell scope="col">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loadingRef.current ||
              typeof matchesRef.current === "undefined" ? (
                <TableRow>
                  <TableCell colSpan={4}>
                    <div
                      style={{
                        width: "100%",
                        display: "inline-block",
                        textAlign: "center",
                      }}
                    >
                      <PropagateLoader></PropagateLoader>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                matchesRef.current.map((item) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell>{item.viewDate}</TableCell>
                      <TableCell>{item.viewAmount}</TableCell>
                      <TableCell>{item.viewLabel}</TableCell>
                      <TableCell>{item.description}</TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
