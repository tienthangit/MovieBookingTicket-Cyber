import { actionTypes } from "../actions/type";

const initialState = {
  bannerList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_BANNERS:
      state.bannerList = payload;
      return { ...state };

    default:
      return state;
  }
};
export default reducer;
