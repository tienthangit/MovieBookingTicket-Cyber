import { userServices } from "../../Services/userServices";
import { openNotificationWithIcon } from "../../Utils/notification/notification";
import { USER_LOGIN } from "../../Utils/systemSetting";
import { createActions } from "../constants/createAction";
import { USER_SIGNIN, FETCH_INFO_USER } from '../constants/userConstants'

export const SignInAction = (userLogin, callback) => {
    return (dispatch) => {
        userServices.signIn(userLogin)
            .then((res) => {
                localStorage.setItem(USER_LOGIN, JSON.stringify(res.data.content))
                localStorage.setItem('toKen', res.data.content.accessToken)
                dispatch(createActions(USER_SIGNIN, res.data.content))
                callback();
                console.log(res.data.content);
            })
            .catch((err) => {
                openNotificationWithIcon(`error`, err.response.data?.content)
                console.log(err.response?.data);
            })
    }
}


export const SignUpAction = (userNew, callback) => {
  return (dispatch) => {
    userServices.signUp(userNew)
      .then((res) => {
        // alert(res.data.message);
        openNotificationWithIcon(`success`, res.data?.message)
        console.log(res);
        callback();
      })
      .catch((err) => {
        openNotificationWithIcon(`error`, err.response.data?.content)
        console.log(err.response.data);
      })
  }
}

export const CapNhatThongTinNguoiDung = () => {
  return async (dispatch) => {
    try {
      const { data } = await userServices.layThongTinNguoiDung();
      const { taiKhoan, matKhau, hoTen, email, soDT, maNhom } = data.content;
      const user = { taiKhoan, matKhau, hoTen, email, soDT, maNhom,
        maLoaiNguoiDung: 'KhachHang',}
      const result = await userServices.CapNhatThongTinNguoiDung(user);
      console.log(result);
      if (result.data.statusCode === 200) {
        dispatch(createActions.FETCH_INFO_USER,result.data.content);
      }
    }
    catch (err) {
      console.log('err', err);
    }
  }
}