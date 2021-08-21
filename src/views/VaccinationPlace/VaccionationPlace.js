import React from 'react';

const VaccinationPlaces = (props) => {
    return (
        <p>{`Vaccination Point Id: ${props.match.params.id}`}</p>
    );
}
 
export default VaccinationPlaces;