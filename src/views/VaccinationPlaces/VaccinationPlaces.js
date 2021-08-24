import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVaccinationPoints } from '../../app/redux/actions/places.actions';
import { loadingSelector, placesSelector } from '../../app/redux/selectors/places.selectors';
// My components
import CardPlaces from '../../components/CardPlaces/CardPlaces';

const mapStateToProps = state => ({
    loading: loadingSelector(state),
    places: placesSelector(state),
});

const mapActionsToProps = dispatch => ({
    loadPlaces: () => dispatch(getVaccinationPoints())
});

export const VaccinationPlaces = ({loadPlaces}) => {

    useEffect(() => {
        loadPlaces();
    }, []);

    return (
        <CardPlaces/>
    );
}
 
export default connect(mapStateToProps, mapActionsToProps)(VaccinationPlaces);