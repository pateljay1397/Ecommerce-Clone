import axois from "axios";
import { api } from "../urlConfig";

const axoisInstance = axois.create({
  baseURL: api,
  //   headers: {
  //     Authorization: "",
  //   },
});

export default axoisInstance;
