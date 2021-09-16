import { createActions } from "../constants/createAction";
import { bookingServices } from "../../Services/bookingServices";
import { GET_DETAIL_ROOM_TICKET, GET_INFO_BOOKING, DAT_VE_HOAN_TAT, CHUYEN_TAB } from "../constants/bookingConstant";
import { HIDE_LOADING, ON_LOADING } from "../constants/loadingConstanst";

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
            dispatch(createActions(ON_LOADING))

            const result = await bookingServices.bookingTicket(thongTinDatVe)
            
            // vì bất đồng bộ nên xử lý bằng đợi load xog getDetailRoomTicketAction rồi dispatch tiếp
            await dispatch(getDetailRoomTicketAction(thongTinDatVe.maLichChieu))
            await dispatch(createActions(DAT_VE_HOAN_TAT))
            await dispatch(createActions(CHUYEN_TAB))


            dispatch(createActions(HIDE_LOADING))
        } catch (err)
        {
            dispatch(createActions(HIDE_LOADING))
            console.log(err);
        }
    }
}

export const getInfoBookingAction = () => {
    return async (dispatch) => {
        try
        {
            const result = await bookingServices.getInfoBooking()
            dispatch(createActions(GET_INFO_BOOKING, result.data.content))
            console.log(result.data);
        } catch (err)
        {
            console.log(err);
        }
    }
}