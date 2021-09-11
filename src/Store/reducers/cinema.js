import { actionTypes } from "../actions/type";

const initialState = {
  cinemaList: null,
  InfoCinemaDetail: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_INFO_CINEMA:
      state.cinemaList = payload;
      return { ...state };

    case actionTypes.SET_LIST_CINEMA_DETAIL:
      state.InfoCinemaDetail = payload;
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
