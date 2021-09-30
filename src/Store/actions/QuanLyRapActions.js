import { QuanLyRapServices } from "../../Services/QuanLyRapServices";
import { createActions } from "../constants/createAction";
import { SET_FILM_DETAILS, SET_INFO_CINEMA } from "../constants/QuanLyRapConstants";
import { HIDE_LOADING, ON_LOADING } from "../constants/loadingConstanst";


export const FetchMovieDetailsAction = (id) => {
  return async (dispatch) => {
    try
    {
      await dispatch(createActions(ON_LOADING))
      const res = await QuanLyRapServices.ListFilmDetails(id)
      dispatch(createActions(SET_FILM_DETAILS, res.data.content));

      await dispatch(createActions(HIDE_LOADING))

      dispatch(createActions(HIDE_LOADING))
    } catch (err)
    {
      console.log(err.response); 
    }
    
      
  };
};

export const FetchInfoCinema = () => {
  return (dispatch) => {
    QuanLyRapServices.ListInfoCinema()
      .then((res) => {
        dispatch(createActions(SET_INFO_CINEMA, res.data.content));
      })
      .catch((err) => console.log(err));
  };
};
