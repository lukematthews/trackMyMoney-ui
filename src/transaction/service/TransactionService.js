import http from "./http-common";

const deletePOSAuthorisations = (id) => {
  return http.delete(`/delete-authorisations`);
};

const getPageDetails = () => {
  return http.get("/loadedMonths");
};

const TransactionService = {
  deletePOSAuthorisations,
  getPageDetails,
};

export default TransactionService;
