import { createActions } from "../constants/createAction";
import { actionTypes } from "./type";
import { requests } from "../../Services/Api/request";

//async action
export const fetchBanners = (dispatch) => {
  requests({
    url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
    method: "GET", 
  })
    .then((res) => {
        dispatch(createActions(actionTypes.SET_BANNERS,res.data));
    })
    .catch((err) => console.error(err));
};
