import { headers, method, url } from '../utils/constants';
import fetchAPI from './fetchApi';

export const getApiReservationById = async (clientId, token, setDoneReservation) => {

  const response = await fetchAPI(method.GET, url.RESERVATION, null, headers(token));

  const reservationsByClient = response.data.filter(e => (
    e.clientId === +clientId
  ));

  setDoneReservation([...reservationsByClient]);
};
