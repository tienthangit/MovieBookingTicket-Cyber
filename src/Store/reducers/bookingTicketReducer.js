import { GET_DETAIL_ROOM_TICKET, SET_GHE_DANG_DAT } from "../constants/bookingConstant"

const initialState = {
    detailRoomTicket: {},
    listSeatSelected: [],
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

        default:
            return state
    }
}

export default bookingTicketReducer