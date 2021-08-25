import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { placesSelector } from '../../app/redux/selectors/places.selectors';
import { Card, Row, Col, Image } from "antd";
import "./VaccinationPlace.css";
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
        <Row>
            <Col span={4} className='col' >
                <Card title={place?.name} headStyle={{textAlign: 'center'}} >
                    <p><b>Address:</b> {place?.address}</p>
                    <p><b>latitude:</b> {place?.lat}</p>
                    <p><b>longitude:</b> {place?.lon}</p>
                    <Image src={place?.img} />
                </Card>
            </Col>
            <Col span={12} className='col' >
                <MapLeafLet place={place} />
            </Col>
        </Row>
    );
}
 
export default connect(mapStateToProps)(VaccinationPlaces);