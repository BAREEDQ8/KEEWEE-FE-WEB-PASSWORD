import axios from "axios";

const instance = axios.create({
  baseURL: "https://keewee-be-652769a3d7b1.herokuapp.com",
});

export default instance;
