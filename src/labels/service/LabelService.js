import http from "./http-common";

const getAll = () => {
  return http.get("/labels");
};

const get = (id) => {
  return http.get(`/${id}`);
};

const create = (data) => {
  return http.post(`/`, data);
};

const update = (id, data) => {
  return http.put(`/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/delete-label/${id}`);
};

const findByName = (name) => {
  return http.get(`/search?name=${name}`);
};

const parentLabels = () => {
  return http.get(`/parentLabels`);
};

const types = () => {
  return http.get(`/labelTypes`);
};

const matchTransactions = (patterns) => {
  return http.post(`/matchTransactions`, patterns);
};

const LabelService = {
  getAll,
  get,
  create,
  update,
  remove,
  findByName,
  parentLabels,
  types,
  matchTransactions,
};

export default LabelService;
