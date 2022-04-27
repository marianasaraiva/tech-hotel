import React, { useContext } from 'react';
import Context from '../../context/Context';
import fetchAPI from '../../services/fetchApi';
import { getApiReservationById } from '../../services/getApiReservationById';
import { url, method, headers } from '../../utils/constants';
import { CancelButton } from './styles';
import { getApiRooms } from '../../services/getApiRooms'; 

function DeleteButton({ id, clientId }) {
  const { token, setDoneReservation, setRooms } = useContext(Context);

  const deleteReservation = async () => {
    await fetchAPI(method.DELETE, `${url.RESERVATION}/${id}`, null, headers(token));

    getApiReservationById(clientId, token, setDoneReservation);

    const response = await getApiRooms();
    setRooms(response);
  }

  return (
    <CancelButton
      type="button"
      onClick={ deleteReservation }
    >
      Cancelar
    </CancelButton>
  )
}

export default DeleteButton;
