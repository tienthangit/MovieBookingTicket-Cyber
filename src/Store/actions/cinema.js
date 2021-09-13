import { requests } from "../../Services/Api/request";
import { createActions } from "../constants/createAction";
import { actionTypes } from "./type";

export const fetchInfoCinema = () => {
  return (dispatch) => {
    requests({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
      method: "GET",

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
      }
    })
      .then((res) => {
        dispatch(createActions(actionTypes.SET_LIST_CINEMA_DETAIL, res.data.content));
      })
      .catch((err) => console.log(err));
  };
};
