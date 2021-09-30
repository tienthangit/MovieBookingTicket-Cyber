import { userServices } from "../../Services/userServices";
import { openNotificationWithIcon } from "../../Utils/notification/notification";
import { USER_LOGIN } from "../../Utils/systemSetting";
import { createActions } from "../constants/createAction";
import {
  USER_SIGNIN,
  SET_THONG_TIN_NGUOI_DUNG,
  CAP_NHAT_THONG_TIN_NGUOI_DUNG,
} from "../constants/userConstants";
import { HIDE_LOADING, ON_LOADING } from "../constants/loadingConstanst";


export const SignInAction = (userLogin, callback) => {
  return async (dispatch) => {

    try
    {
      dispatch(createActions(ON_LOADING))

      const result = await userServices.signIn(userLogin)
      openNotificationWithIcon(`success`, `Xin chào ${result.data.content.hoTen}!`)

      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
      localStorage.setItem("toKen", result.data.content.accessToken);
      dispatch(createActions(USER_SIGNIN, result.data.content));

      // console.log(result);
      await dispatch(createActions(HIDE_LOADING))
      callback();
    } catch (err)
    {

      openNotificationWithIcon(`error`, err.response.data?.content)
      dispatch(createActions(HIDE_LOADING))
      console.log(err);
    }
  };
};

export const SignUpAction = (userNew, callback) => {
  return async (dispatch) => {
    try
    {
      await dispatch(createActions(ON_LOADING))

      const result = await userServices.signUp(userNew)
      
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
      localStorage.setItem("toKen", result.data.content.accessToken);

      openNotificationWithIcon(`success`, `Đăng ký thành công: Xin chào ${result.data.content.hoTen}!`)
      dispatch(createActions(USER_SIGNIN, result.data.content));
      // console.log(result);
      await dispatch(createActions(HIDE_LOADING))
      callback();
    } catch (err)
    {
      dispatch(createActions(HIDE_LOADING))
      openNotificationWithIcon(`error`, err.response.data?.content)
      console.log(err);
    }
  };
};

export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try
    {
      const result = await userServices.layThongTinNguoiDung();
      if (result.data.statusCode === 200)
      {
        dispatch(createActions(SET_THONG_TIN_NGUOI_DUNG, result.data.content)
          //   {
          //   type: SET_THONG_TIN_NGUOI_DUNG,
          //   thongTinNguoiDung: result.data.content,
          // }
        );
        console.log("result", result);
      }
    } catch (err)
    {
      console.log(err);
    }
  };
};

export const CapNhatThongTinNguoiDung = (user) => {
  return async (dispatch) => {
    try
    {
      const result = await userServices.CapNhatThongTinNguoiDung(user);
      console.log(result);
      if (result.data.statusCode === 200)
      {
        dispatch({
          type: CAP_NHAT_THONG_TIN_NGUOI_DUNG,
          newUserInfo: result.data.content,
        });
      }
    } catch (err)
    {
      console.log("err", err);
    }
  };
};
