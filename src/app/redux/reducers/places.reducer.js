import { GET_PLACES, GET_PLACES_SUCCESS, GET_PLACES_ERROR } from "../actions/places.actions";

const initialState = {
    loading: false,
    places: [],
    error: null
}

export const placesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case GET_PLACES:
            return { ...state, loading: true, places: [], error: null };
        case GET_PLACES_SUCCESS:
            return { ...state, loading: false, places: payload };
        case GET_PLACES_ERROR:
            return { ...state, loading: false, error: payload };
        default:
            return state;
    }
}