import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8080",
  // baseURL: "https://keewee-be-652769a3d7b1.herokuapp.com",
  baseURL: "https://keewee-be-deploy-d4ae1bd2358e.herokuapp.com/api",
});

export default instance;
