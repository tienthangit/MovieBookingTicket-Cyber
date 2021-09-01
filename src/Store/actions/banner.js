import { createAction } from "./index";
import { actionTypes } from "./type";
import { request } from "../../api/request";

//async action
export const fetchBanners = (dispatch) => {
  request({
    url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
    method: "GET",
    headers: {
      TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjQiLCJIZXRIYW5TdHJpbmciOiIyMS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDI3MjMyMDAwMDAiLCJuYmYiOjE2MTYxNzMyMDAsImV4cCI6MTY0Mjg3MDgwMH0.2sSWVGy-3Ce9iJ8bIYmYOJ9aE1eu3fz07DtA2ECfiyk',
    }
    
  })
    .then((res) => {
        dispatch(createAction(actionTypes.SET_BANNERS,res.data));
    })
    .catch((err) => console.error(err));
};
