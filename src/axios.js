import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://3000-areandd-capstonebackend-0e1ygi930oc.ws-us73.gitpod.io/",
});

export default instance;
