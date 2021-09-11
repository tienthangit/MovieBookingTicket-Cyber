import { requests } from "../../Services/Api/request";
import { createActions } from "../constants/createAction";
import { actionTypes } from "./type";

export const fetchInfoCinema = () => {
  return (dispatch) => {
    requests({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjQiLCJIZXRIYW5TdHJpbmciOiIyMS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDI3MjMyMDAwMDAiLCJuYmYiOjE2MTYxNzMyMDAsImV4cCI6MTY0Mjg3MDgwMH0.2sSWVGy-3Ce9iJ8bIYmYOJ9aE1eu3fz07DtA2ECfiyk",
      },
    })
      .then((res) => {
        dispatch(createActions(actionTypes.SET_INFO_CINEMA, res.data.content));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchInfoCinemaDetail = (id) => {
  return (dispatch) => {
    requests({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim",
      method: "GET",
      params: {
        MaPhim: id,
      },
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjQiLCJIZXRIYW5TdHJpbmciOiIyMS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDI3MjMyMDAwMDAiLCJuYmYiOjE2MTYxNzMyMDAsImV4cCI6MTY0Mjg3MDgwMH0.2sSWVGy-3Ce9iJ8bIYmYOJ9aE1eu3fz07DtA2ECfiyk",
      },
    })
      .then((res) => {
        dispatch(createActions(actionTypes.SET_LIST_CINEMA_DETAIL, res.data.content));
      })
      .catch((err) => console.log(err));
  };
};
