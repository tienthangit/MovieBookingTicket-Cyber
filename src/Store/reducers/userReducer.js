import { USER_LOGIN , USER_INFO } from "../../Utils/systemSetting";
import { GET_INFO_BOOKING } from "../constants/bookingConstant";
import { USER_SIGNIN } from "../constants/userConstants";

let user = {};
if (localStorage.getItem(USER_LOGIN))
{
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLogin: user,
    userLoginDefault: null,
    infoUser: [],
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type)
    {
        case USER_SIGNIN:
            state.userLogin = payload;
            state.userLoginDefault = state.userLogin;
            return { ...state }
        case GET_INFO_BOOKING:
            state.infoUser = payload
            return { ...state }

        default:
            return state
    }
}
