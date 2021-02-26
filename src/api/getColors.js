// import axios from "axios";
import axios from "axios";
import axiosWithAuth from "../helpers/axiosWithAuth";

export const getColors = () => {
  return axios
    .get("http://localhost:5000/api/colors")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
