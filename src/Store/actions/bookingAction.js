import { createActions } from "../constants/createAction";
import { bookingServices } from "../../Services/bookingServices";
import { GET_DETAIL_ROOM_TICKET, GET_INFO_BOOKING } from "../constants/bookingConstant";

export const getDetailRoomTicketAction = (maLichChieu) => {
    return async (dispatch) => {
        try
        {
            const result = await bookingServices.getRoomTicket(maLichChieu);
            dispatch(createActions(GET_DETAIL_ROOM_TICKET, result.data.content))
        } catch (err)
        {
            console.log(err?.response);
        }
    }
}

export const bookingTicketAction = (thongTinDatVe) => {
    return async (dispatch) => {
        try
        {
            const result = await bookingServices.bookingTicket(thongTinDatVe)
            console.log(result.data);
        } catch (err)
        {
            console.log(err);
        }
    }
}

export const getInfoBookingAction = () => {
    return async (dispatch) => {
        try
        {
            const result = await bookingServices.getInfoBooking()
            dispatch(createActions(GET_INFO_BOOKING,result.data.content))
            console.log(result.data);
        } catch (err)
        {
            console.log(err);
        }
    }
}