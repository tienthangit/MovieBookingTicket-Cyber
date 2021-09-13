import { movieServices } from "../../Services/movieServices";
import { createActions } from "../constants/createAction";
import { SET_MOVIES_LIST } from "../constants/movieConstants";

export const FetchListMovieAction = () => {
  return (dispatch) => {
    movieServices
      .ListFilm()
      .then((res) => {
        dispatch(createActions(SET_MOVIES_LIST, res.data.content));
      })
      .catch((err) => console.log(err));
  };
};
