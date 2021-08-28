import routes from '../rest/routes';
import client from '../rest/client';

export const createAppointment = async (data) => {
    // console.log(data);
    const appointments = await client.post(routes.createAppointment(), data);
    return appointments;
}