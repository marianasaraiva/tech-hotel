import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import TableReservation from '../../components/TableReservation';
import Context from '../../context/Context';

import fetchAPI from '../../services/fetchApi';
import { validateData, validateFields } from '../../utils/reservationValidate';
import { dateCalendary, diffDates } from '../../utils/calendaryValidate';
import { url, method, headers } from '../../utils/constants';

import { 
  ContainerTitle,
  ContainerForm,
  ContainerMain,
  ContainerPage,
  ContainerReservation
} from './styles';

import { getApiReservationById } from '../../services/getApiReservationById';
import { getReservationClient } from '../../services/getReservationClient';
import { getApiRooms } from '../../services/getApiRooms';
import { roomFilter } from '../../utils/roomFilter';

function Reservation() {
  const [checkIn, setCheckIn] = useState('');
  const [quantityDays, setQuantityDays] = useState('');
  const [priceRooms, setPriceRooms] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [checkOut, setCheckOut] = useState('');
  const [selectRooms, setSelectRooms] = useState([]);

  const { doneReservation, setDoneReservation } = useContext(Context);
  const { token } = useContext(Context);
  const { rooms, setRooms } = useContext(Context);

  const { id: clientId } = useParams();

  useEffect(() => {
    (async () => {
      getApiReservationById(clientId, token, setDoneReservation);
      const response = await getApiRooms();
      setRooms(response);
    })();
  }, []);

  useEffect(() => {
    roomFilter(rooms, setSelectRooms);
  }, [rooms]);

  useEffect(() => {
    validateData(checkIn, checkOut, quantityDays, priceRooms, setDisabled);
  }, [checkIn, checkOut, quantityDays, priceRooms]);

  const saveReservation = async () => {
    const roomId = rooms.find(r => r.price.includes(priceRooms) && r.reservations.length === 0).id;
    const data = {
      checkIn,
      checkOut,
      quantityDays,
      totalPrice: +quantityDays * +priceRooms,
      roomId,
    };

    const response = await fetchAPI(method.POST, url.RESERVATION, data, headers(token));
    return response.data.id;
  }

  const sendForm = async () => {
    const validateTrue = validateFields(checkIn, checkOut);
    if (validateTrue) return;

    const reservationId = await saveReservation();

    setCheckIn('');
    setCheckOut('');
    setQuantityDays('');
    setPriceRooms('');

    const response = await getApiRooms();
    setRooms(response);
    getReservationClient(reservationId, token, doneReservation, setDoneReservation);
  }

  return (
    <ContainerPage>
      <Header/>
      
      <ContainerTitle>
        <h1>Reservation</h1>
      </ContainerTitle>

      <ContainerMain>
        <ContainerForm>
          <label htmlFor="checkIn">
            Check-in
            <input
              id="checkIn"
              type="date"
              min={ dateCalendary(true) }
              max={ dateCalendary(false) }
              placeholder="Check-in: aaaa/mm/dd"
              required
              value={ checkIn }
              onChange={ ({ target }) => setCheckIn(target.value) }
            />
          </label>

          <label htmlFor="checkOut">
            Check-out
            <input
              id="checkOut"
              type="date"
              min={ checkIn }
              max={ dateCalendary(false) }
              placeholder="Check-out: aaaa/mm/dd"
              required
              value={ checkOut }
              onChange={ ({ target }) => {
                setCheckOut(target.value);
                diffDates(checkIn, target.value, setQuantityDays);
              } }
            />
          </label>

          <label htmlFor="quantityDays">
            Estadia
            <input
              id="quantityDays"
              type="text"
              placeholder="Quantidade dias"
              required
              value={ quantityDays }
              readOnly
            />
          </label>

          <label htmlFor="select">
            Escolha seu quarto:
            <select
              id="select"
              value={priceRooms}
              required
              onChange={ ({ target }) => setPriceRooms(target.value) }
            >
            {
              !priceRooms &&
                <option value="">Selecione</option>
            }
            { 
              selectRooms && selectRooms.map((e) => (
                <option
                  value={e.price}
                  key={e.id}
                >
                  {`${e.type} - ${e.price}`}
                </option>
              ))
            } 
            </select>
          </label>

          <button
            type="button"
            onClick={ sendForm }
            disabled={ disabled }
          >
            Enviar
          </button>
        </ContainerForm>
        {
          doneReservation.length !== 0 &&
          <ContainerReservation>
            <h3>Reserva(s) concluída(s) com sucesso!</h3>
            <h4>{`${doneReservation[0].client.fullName}` }</h4>
            <TableReservation />
          </ContainerReservation>
        }
      </ContainerMain>
    </ContainerPage>
  )
};

export default Reservation;