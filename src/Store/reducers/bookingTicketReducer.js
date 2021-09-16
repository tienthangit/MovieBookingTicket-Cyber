import { GET_DETAIL_ROOM_TICKET, SET_GHE_DANG_DAT, DAT_VE_HOAN_TAT, CHUYEN_TAB, CHUYEN_TAB_ACTIVE } from "../constants/bookingConstant"

const initialState = {
    detailRoomTicket: {},
    listSeatSelected: [],
    tabActive: "1",
}

const bookingTicketReducer = (state = initialState, { type, payload }) => {
    switch (type)
    {

        case GET_DETAIL_ROOM_TICKET:
            state.detailRoomTicket = payload
            return { ...state }
        case SET_GHE_DANG_DAT:
            state.listSeatSelected = payload
            return { ...state }
        case DAT_VE_HOAN_TAT:
            state.listSeatSelected = []
            return { ...state }
        case CHUYEN_TAB:
            state.tabActive = "2";
            return { ...state }
        case CHUYEN_TAB_ACTIVE:
            state.tabActive = payload;
            return { ...state }

        default:
            return state
    }
}

export default bookingTicketReducer