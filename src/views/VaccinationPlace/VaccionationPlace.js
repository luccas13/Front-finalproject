import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { placesSelector } from '../../app/redux/selectors/places.selectors';
// My components.
import MapLeafLet from '../../components/MapLeafLet/MapLeafLet';

const mapStateToProps = state => ({
    places: placesSelector(state),
});

const VaccinationPlaces = (props) => {
    const {id} = props?.match?.params;
    const [place, setPlace] = useState({});

    useEffect(() => {
        setPlace(props?.places?.filter(({_id}) => _id === id )[0]);
    }, []);

    return (
        <MapLeafLet place={place} />
    );
}
 
export default connect(mapStateToProps)(VaccinationPlaces);