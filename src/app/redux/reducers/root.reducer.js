import { combineReducers } from 'redux';
import { placesReducer } from './places.reducer';

const root = (state = {}, action) => {
    return state
}

export default combineReducers({
    root,
    placesReducer,
})