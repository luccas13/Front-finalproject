import React, { useState, useEffect } from 'react';
import { Row, Form, Input, Select, DatePicker, Button } from "antd";
import { connect } from 'react-redux';
import { loadingSelector, placesSelector } from '../../app/redux/selectors/places.selectors';
import { getVaccinationPoints } from '../../app/redux/actions/places.actions';
import { loadingSelectorAppointment } from '../../app/redux/selectors/appointments.selectors';
import { saveAppointment } from '../../app/redux/actions/appointment.actions';

const mapStateToProps = state => ({
    loading: loadingSelector(state),
    places: placesSelector(state),
    appointmentLoading: loadingSelectorAppointment(state), 
});

const mapActionsToProps = dispatch => ({
    loadPlaces: () => dispatch(getVaccinationPoints()),
    saveAppointment: (date) => dispatch(saveAppointment(date)),
});

const CreateForm = (props) => {

    useEffect(() => {
        props.loadPlaces();
    }, []);

    const onFinish = (data) => {
        props.saveAppointment(data);
    }

    return (
        <>
        <Row justify='center' align='middle' className='row title' >
            LLENE EL FORMULARIO CON SUS DATOS
        </Row>
        <Row justify='center' align='middle' className='row form-container' >
            <Form 
                className='form' 
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }} 
                onFinish={onFinish}
            >
                <Form.Item 
                    className='form-item'
                    label='Nombre:'
                    name='name'
                    rules={[{ required: true, message: 'Debe ingresar su nombre.' }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item 
                    className='form-item'
                    label='Apellido:'
                    name='surname'
                    rules={[{ required: true, message: 'Debe ingresar su apellido.' }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item  
                    className='form-item'
                    label='DNI:'
                    name='dni'
                    rules={[{ required: true, message: 'Debe ingresar número de dni.' }]}
                >
                    <Input type='number' step={10} />
                </Form.Item>
                <Form.Item  
                    className='form-item'
                    label='Puesto de vacunación:'
                    name='point'
                    rules={[{ required: true, message: 'Debe elegir un puesto de vacunación.' }]}
                >
                    <Select span={3} >
                        {props?.places?.map(({_id, name}) => {return(
                            <Select.Option value={_id} key={_id} >{name}</Select.Option>
                        )})}
                    </Select>
                </Form.Item>
                <Form.Item  
                    className='form-item'
                    label='Fecha del turno:'
                    name='date'
                    rules={[{ required: true, message: 'Debe elegir la fecha del turno.' }]}
                >
                    <DatePicker/>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={props.appointmentLoading} >
                        Enviar
                    </Button>
                </Form.Item>
            </Form>
        </Row>
        </>
    );
}

export default connect(mapStateToProps, mapActionsToProps)(CreateForm);