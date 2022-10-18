import http from "./http-common";

const get = async (id) => {
  return http.get(`/labelBalance?labelId=${id}`);
};

const LabelService = {
  get,
};

export default LabelService;
