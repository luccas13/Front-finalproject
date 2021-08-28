import { createAppointment } from "../../services/appointment.services";

//Action Types
export const GET_APPOINTMENT_BY_ID = "GET_APPOINTMENT_BY_ID";
export const GET_APPOINTMENT_BY_ID_SUCCESS = "GET_APPOINTMENT_BY_ID_SUCCESS";
export const GET_APPOINTMENT_BY_ID_ERROR = "GET_APPOINTMENT_BY_ID_ERROR";

export const POST_APPOINTMENT = "POST_APPOINTMENT";
export const POST_APPOINTMENT_SUCCESS = "POST_APPOINTMENT_SUCCESS";
export const POST_APPOINTMENT_ERROR = "POST_APPOINTMENT_ERROR";

//Actions Creators
export const getAppointmentById = () => ({ type: GET_APPOINTMENT_BY_ID });
export const getAppointmentByIdSuccess = (appointments) => ({ type: GET_APPOINTMENT_BY_ID_SUCCESS, payload: appointments });
export const getAppointmentByIdError = (err) => ({ type: GET_APPOINTMENT_BY_ID_ERROR, payload: err });

export const postAppointment = () => ({ type: POST_APPOINTMENT });
export const postAppointmentSuccess = (date) => ({ type: POST_APPOINTMENT_SUCCESS, payload: date });
export const postAppointmentError = (err) => ({ type: POST_APPOINTMENT_ERROR, payload: err });

//Dispatch with Thunks Middleware
// export const getAppointments = () => {
//   return async (dispatch) => {
//     dispatch(getPlaces());
//     try {
//       const places = await getPoints();
//       dispatch(getPlacesSuccess(places));
//     } catch (e) {
//       const { message } = e;
//       dispatch(getPlacesError(message));
//     }
//   };
// };

export const saveAppointment = (data) => {
    return async (dispatch) => {
      dispatch(postAppointment());
      try {
        await createAppointment(data);
        dispatch(postAppointmentSuccess());
      } catch (e) {
        const { message } = e;
        dispatch(postAppointmentError(message));
      }
    };
};