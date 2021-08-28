import * as nameless from "../actions/appointment.actions"

const initialState = {
    loading: false,
    appointments: [],
    error: null
}

export const appointmentsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case nameless.GET_APPOINTMENT_BY_ID:
            return { ...state, loading: true, appointments: [], error: null };
        case nameless.GET_APPOINTMENT_BY_ID_SUCCESS:
            return { ...state, loading: false, appointments: payload };
        case nameless.GET_APPOINTMENT_BY_ID_ERROR:
            return { ...state, loading: false, error: payload };
        case nameless.POST_APPOINTMENT:
            return { ...state, loading: true, error: null };
        case nameless.POST_APPOINTMENT_SUCCESS:
            return { ...state, loading: false};
        case nameless.POST_APPOINTMENT_ERROR:
            return { ...state, loading: false};
        default:
            return state;
    }
}