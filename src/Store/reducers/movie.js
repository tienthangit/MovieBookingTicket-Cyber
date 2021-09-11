import { actionTypes } from "../actions/type";

const initialState = {
  movieList: null,
  movieDetail:null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_MOVIES:
      state.movieList = payload;
      return { ...state };
    
    case actionTypes.SET_MOVIE_DETAIL:
        state.movieDetail = payload;
        return { ...state};

    default:
      return state;
  }
};

export default reducer;
