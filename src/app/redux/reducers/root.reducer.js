import { combineReducers } from 'redux';
import { placesReducer } from './places.reducer';
import { appointmentsReducer } from './appointment.reducer';

const root = (state = {}, action) => {
    return state
}

export default combineReducers({
    root,
    placesReducer,
    appointmentsReducer,
})