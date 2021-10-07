import { USER_LOGIN, USER_INFO, TOKEN } from "../../Utils/systemSetting";
import { GET_INFO_BOOKING } from "../constants/bookingConstant";
import {
  USER_SIGNIN,
  CAP_NHAT_THONG_TIN_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../constants/userConstants";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  userLogin: user,
  infoUser: {},
  thongTinNguoiDung: {},
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SIGNIN:
      state.userLogin = payload;
      state.userLoginDefault = state.userLogin;
      return { ...state };
    case GET_INFO_BOOKING:
      state.infoUser = payload;
      return { ...state };

    case SET_THONG_TIN_NGUOI_DUNG:
      state.thongTinNguoiDung = payload;
      return { ...state };

    case CAP_NHAT_THONG_TIN_NGUOI_DUNG:
    state.infoUser = payload
    return {...state}

    default:
      return state;
  }
};
