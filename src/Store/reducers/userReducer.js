import { USER_LOGIN } from "../../Utils/systemSetting";
import { GET_INFO_BOOKING } from "../constants/bookingConstant";
import { USER_SIGNIN } from "../constants/userConstants";

let user = {};
if (localStorage.getItem(USER_LOGIN))
{
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLogin: user,
    infoUser: []
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type)
    {
        case USER_SIGNIN:
            state.userLogin = payload
            return { ...state }
        case GET_INFO_BOOKING:
            state.infoUser = payload
            return { ...state }

        default:
            return state
    }
}
