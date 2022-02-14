import axios from "axios";
import Swal from "sweetalert2";

import { logout } from "./service/Authentication";

const token = localStorage.getItem("jwt");

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const createAPI = (baseURL = process.env.REACT_APP_BASE_URL, config = {}) => {
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...config,
  });

  return axiosInstance;
};

const EDESA_API = createAPI();

const UNAUTHORIZED = 401;
EDESA_API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === UNAUTHORIZED) {
      console.log("error 410 guys");
      Swal.fire({
        title: "Token expired, please re-login",
        icon: "error",
        confirmButtonText: "Confirm",
        showLoaderOnConfirm: true,
        preConfirm: () => logout(),
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          logout();
          window.location.replace("/public/login");
        }
      });
    } else {
      return Promise.reject(error);
    }
  }
);

export default EDESA_API;
