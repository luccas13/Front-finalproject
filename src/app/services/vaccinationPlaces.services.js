import routes from '../rest/routes';
import client from '../rest/client';

export const getPoints = async () => {
    const places = await client.get(routes.vaccinationPoints());
    return places;
}