import { userServices } from "../../Services/userServices";
import { openNotificationWithIcon } from "../../Utils/notification/notification";
import { USER_LOGIN } from "../../Utils/systemSetting";
import { createActions } from "../constants/createAction";
import { USER_SIGNIN } from '../constants/userConstants'

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