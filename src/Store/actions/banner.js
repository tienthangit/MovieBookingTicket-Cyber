import { createAction } from "./index";
import { actionTypes } from "./type";
import { request } from "../../api/request";

//async action
export const fetchBanners = (dispatch) => {
  request({
    url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner",
    method: "GET",
  })
    .then((res) => {
        dispatch(createAction(actionTypes.SET_BANNERS,res.data));
    })
    .catch((err) => console.error(err));
};
