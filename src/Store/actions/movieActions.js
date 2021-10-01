import { movieServices } from "../../Services/movieServices";
import { createActions } from "../constants/createAction";
import { HIDE_LOADING, ON_LOADING } from "../constants/loadingConstanst";
import { SET_MOVIES_LIST, SET_BANNER_LIST } from "../constants/movieConstants";

export const FetchListMovieAction = () => {
  return async (dispatch) => {
    try
    {
      await dispatch(createActions(ON_LOADING))
      const result = await movieServices.ListFilm();
      dispatch(createActions(SET_MOVIES_LIST, result.data.content));

      await dispatch(createActions(HIDE_LOADING))
    } catch (err)
    {
      dispatch(createActions(HIDE_LOADING))
      console.log(err.response);
    }
  };
};

export const FetchListBannerActions = () => {
  return (dispatch) => {
    movieServices
      .ListBanner()
      .then((res) => {
        dispatch(createActions(SET_BANNER_LIST, res.data.content));
      })
      .catch((err) => console.log(err));
  };
};
