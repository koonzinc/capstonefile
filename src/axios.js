import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.0.0.94:3000/",
});

export default instance;
