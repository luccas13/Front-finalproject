import { getPoints } from "../../services/vaccinationPlaces.services";

//Action Types
export const GET_PLACES = "GET_USERS_LOADING";
export const GET_PLACES_SUCCESS = "GET_USERS_OK";
export const GET_PLACES_ERROR = "GET_USERS_ERROR";

//Actions Creators
export const getPlaces = () => ({ type: GET_PLACES });
export const getPlacesSuccess = (places) => ({ type: GET_PLACES_SUCCESS, payload: places });
export const getPlacesError = (err) => ({ type: GET_PLACES_ERROR, payload: err });

//Dispatch with Thunks Middleware
export const getVaccinationPoints = () => {
  return async (dispatch) => {
    dispatch(getPlaces());
    try {
      const places = await getPoints();
      dispatch(getPlacesSuccess(places));
    } catch (e) {
      const { message } = e;
      dispatch(getPlacesError(message));
    }
  };
};