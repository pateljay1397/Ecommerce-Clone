import axios from "axios";
import { api } from "../urlConfig";
import store from "../redux/store";
import { authConstants } from "../redux/actions/constants";
const token = window.localStorage.getItem("token");

const axoisInstance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});
//interceptors to handle the req n res
axoisInstance.interceptors.request.use((req) => {
  const { auth } = store.getState();
  if (auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
});

axoisInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error.response);
    const { status } = error.response;
    // You can update the Back-end code for the status 
    if (status === 500 || status === 400) {
      localStorage.clear();
      store.dispatch({ type: authConstants.LOGOUT_SUCESS });
    }
    return Promise.reject(error);
  }
);
export default axoisInstance;
