import { Link } from 'react-router-dom';
import {Row, Col, Image} from 'antd';
import myImg from '../../assets/images/stop-img.jpg';

const AppointmentForm = () => {
    return (
        <>
        <Row justify='center' align='bottom' className='row title' >
            ¿Ya tienes turno?
        </Row>
        <Row justify='center' className='row' >
            <Image src={myImg} preview={false} className='image-title' />
        </Row>
        <Row justify='center' className='row' >
            <Col>
                <Link to='/appointments/create' >
                    <span className='button' >Sacar turno</span>
                </Link>
            </Col>
            <Col>
                <Link to='/appointments/:id' >
                    <span className='button' >Consultar/Editar turno</span>
                </Link>
            </Col>
        </Row>
        </>
    );
}
 
export default AppointmentForm;