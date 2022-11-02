import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.68:3000/",
});

export default instance;
