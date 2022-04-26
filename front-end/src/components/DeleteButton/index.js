import React, { useContext } from 'react';
import Context from '../../context/Context';
import fetchAPI from '../../services/fetchApi';
import { getApiReservationById } from '../../services/getApiReservationById';
import { url, method, headers } from '../../utils/constants';

function DeleteButton({ id, clientId }) {
  const { token, doneReservation, setDoneReservation } = useContext(Context);

  const deleteReservation = async () => {
    await fetchAPI(method.DELETE, `${url.RESERVATION}/${id}`, null, headers(token));

    getApiReservationById(clientId, token, doneReservation, setDoneReservation);
  }

  return (
    <button
      type="button"
      onClick={ deleteReservation }
    >
      Excluir
    </button>
  )
}

export default DeleteButton;
