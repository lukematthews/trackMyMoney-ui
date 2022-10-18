import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LabelService from "../labels/service/LabelService";
import TransactionService from "../transaction/service/TransactionService";
import { setLabelTypes } from "./labelConfigSlice";
import { setPages } from "./totalPagesSlice";

export const ReduxInitialState = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    LabelService.types()
      .then((response) => {
        dispatch(setLabelTypes(response.data));
      })
      .catch((e) => {
        console.log(e);
      });

    TransactionService.getPageDetails()
      .then((response) => {
        dispatch(setPages(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <></>;
};

export default ReduxInitialState;
