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

function Reservation() {
  const [checkIn, setCheckIn] = useState('');
  const [quantityDays, setQuantityDays] = useState('');
  const [priceRooms, setPriceRooms] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [checkOut, setCheckOut] = useState('');
  const [selectRooms, setSelectRooms] = useState([]);

  const { doneReservation, setDoneReservation } = useContext(Context);
  const { token } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    getApiReservationById();
    getApiRooms();
  }, []);

  useEffect(() => {
    roomFilter();
  }, [rooms]);

  useEffect(() => {
    validateData(checkIn, checkOut, quantityDays, priceRooms, setDisabled);
  }, [checkIn, checkOut, quantityDays, priceRooms]);
  
  const getApiRooms = async () => {
    const response = await fetchAPI(method.GET, url.ROOM);
  
    setRooms(response.data);
  };

  const getApiReservationById = async () => {
    const response = await fetchAPI(method.GET, url.RESERVATION, null, headers(token));

    const reservationsByClient = response.data.filter(e => (
      e.clientId === +id
    ));

    setDoneReservation([...reservationsByClient]);
  };

  const getReservationClient = async (id) => {
    const getReservation = await fetchAPI(method.GET,`${url.RESERVATION}/${id}`, null, headers(token));

    setDoneReservation([...doneReservation, getReservation.data]);
  };

  const roomFilter = () => {
    const roomLux = rooms.filter((e) => e.type === 'Suíte Luxo')
      .find((e) => e.reservations.length === 0);

    const roomExecutive = rooms.filter((e) => e.type === 'Suíte Executiva')
      .find((e) => e.reservations.length === 0);

    const roomStandard = rooms.filter((e) => e.type === 'Quarto Standard')
      .find((e) => e.reservations.length === 0);

    const array = [];

    if (roomLux) array.push(roomLux);

    if (roomExecutive) array.push(roomExecutive);
        
    if (roomStandard) array.push(roomStandard);

    setSelectRooms(array);
    };

  const sendForm = async () => {
    const validateTrue = validateFields(checkIn, checkOut);
    if (validateTrue) return;

    const roomId = rooms.find(r => r.price.includes(priceRooms) && r.reservations.length === 0).id;

    const data = {
      checkIn,
      checkOut,
      quantityDays,
      totalPrice: +quantityDays * +priceRooms,
      roomId,
    };

    const saveReservation = await fetchAPI(method.POST, url.RESERVATION, data, headers(token));

    setCheckIn('');
    setCheckOut('');
    setQuantityDays('');
    setPriceRooms('');

    getApiRooms();
    getReservationClient(saveReservation.data.id);
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