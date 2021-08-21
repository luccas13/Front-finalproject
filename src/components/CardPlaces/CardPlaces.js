import { Card, Row, Col, Image } from "antd";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadingSelector, placesSelector } from '../../app/redux/selectors/places.selectors';
import './cardPlaces.css';

const mapStateToProps = state => ({
    loading: loadingSelector(state),
    places: placesSelector(state),
});

const CardPlaces = ({places, loading}) => {
    return (
        <Row>
            {places?.map(({_id, name, img}) => {return(
                <Col key={_id} className='column' span={8} >
                    <Link to={`/vaccination-places/${_id}`} >
                        <Card className='card' title={name} >
                            <Image className='img' fallback src={img} preview={false} />
                        </Card>
                    </Link>
                </Col>
            )})}
        </Row>
    );
}
 
export default connect(mapStateToProps)(CardPlaces);