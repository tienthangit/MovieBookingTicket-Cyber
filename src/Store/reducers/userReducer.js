import { USER_LOGIN } from "../../Utils/systemSetting";
import { USER_SIGNIN } from "../constants/userConstants";

let user = {};
if (localStorage.getItem(USER_LOGIN))
{
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLogin: user
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type)
    {
        case USER_SIGNIN:
            state.userLogin = payload
            return { ...state }

        default:
            return state
    }
}
