import { actionTypes } from "../actions/type";

const initialState = {
    movieList: [],
};

const reducer = (state = initialState, {type,payload}) =>{
    switch (type){
        case actionTypes.SET_MOVIES:
            state.movieList = payload.movieList;
            return {...state};
        default:
            return state;
    }
}

export default reducer;