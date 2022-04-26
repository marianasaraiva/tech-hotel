import { headers, method, url } from '../utils/constants';
import fetchAPI from './fetchApi';

export const getApiReservationById = async (clientId, token, doneReservation, setDoneReservation) => {

  const response = await fetchAPI(method.GET, url.RESERVATION, null, headers(token));

  console.log('response', response);
  const reservationsByClient = response.data.filter(e => (
    e.clientId === +clientId
  ));

  console.log('entrouuu', reservationsByClient);
  setDoneReservation([...reservationsByClient]);
};
