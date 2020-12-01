import axois from "axios";
import { api } from "../urlConfig";

const token = window.localStorage.getItem("token");

const axoisInstance = axois.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default axoisInstance;
