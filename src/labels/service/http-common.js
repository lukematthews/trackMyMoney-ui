import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8081/api/labels",
  headers: {
    "Content-type": "application/json",
  },
});
