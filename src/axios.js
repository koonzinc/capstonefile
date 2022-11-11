import axios from "axios";

const instance = axios.create({
  baseURL: "https://goodstockspracticebackend.herokuapp.com/",
});

export default instance;
