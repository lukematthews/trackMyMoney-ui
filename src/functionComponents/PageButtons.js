import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "../Transactions.css";
import { nextMonth, previousMonth } from "../redux/pageCounterSlice";

export const PageButtons = (props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => {
    return state.currentPage.value;
  });
  const totalPages = useSelector((state) => {
    return state.totalPages.value;
  });
  const pages = useSelector((state) => {
    return state.totalPages.pages;
  });

  const getMonthName = (index) => {
    return pages && pages.length != 0 && pages.length > index && index >= 0
      ? pages[index].month
      : "-";
  };
  return (
    <div>
      {getMonthName(currentPage - 1) !== "-" ? (
        <Button
          className="m-2"
          variant="outline-primary"
          onClick={() => dispatch(nextMonth())}
          disabled={currentPage == 0}
        >
          {getMonthName(currentPage - 1)}
        </Button>
      ) : (
        <></>
      )}
      {getMonthName(currentPage + 1) !== "-" ? (
        <Button
          className="m-2"
          variant="outline-primary"
          onClick={() => dispatch(previousMonth())}
          disabled={currentPage == totalPages - 1}
        >
          {getMonthName(currentPage + 1)}
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
};
