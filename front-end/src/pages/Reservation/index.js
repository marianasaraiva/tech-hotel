import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import fetchAPI from '../../services/fetchApi';
import Context from '../../context/Context';
import { validateData, validateFields } from '../../utils/reservationValidate';
import TableReservation from '../../components/TableReservation';
import { ContainerTitle, ContainerForm, ContainerMain, ContainerPage, ContainerReservation } from './styles';
import Header from '../../components/Header';

function Reservation() {
  const [checkIn, setCheckIn] = useState('');
  const [quantityDays, setQuantityDays] = useState('');
  const [priceRooms, setPriceRooms] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [rooms, setRooms] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const diffDates = (params) => {
    let diff = Math.abs(new Date(checkIn
      .replace(/-/g,'/')) - new Date(params.replace(/-/g,'/')));

    setQuantityDays(diff/1000/60/60/24);
  }

  const { doneReservation, setDoneReservation } = useContext(Context);

  const { token } = useContext(Context);

  const { id } = useParams();

  const dateCalendary = (currentDay) => {
    let date = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

    if (currentDay) {
      date = new Date();
    }

    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
    
    month = (+month < 10) && `0${month}`;

    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const getApiRooms = async () => {
      const method = 'get';
      const url = 'http://localhost:3001/room';

      const response = await fetchAPI(method, url);

      setRooms(response.data);
    };
    getApiRooms();

    const getApiReservationById = async () => {
      const headers = {
        authorization: token,
      };
      const method = 'get';
      const urlClient = `http://localhost:3001/reservation`;

      const response = await fetchAPI(method, urlClient, null, headers);

      const reservationsByClient = response.data.filter(e => (
        e.clientId === +id
      ));

      setDoneReservation([...reservationsByClient]);
    };
    getApiReservationById();
  }, []);

  useEffect(() => {
    validateData(checkIn, checkOut, quantityDays, priceRooms, setDisabled);
  }, [checkIn, checkOut, quantityDays, priceRooms]);

  const sendForm = async () => {
    const validateTrue = validateFields(checkIn, checkOut);
    if (validateTrue) return;

    const roomId = rooms.find(r => r.price.includes(priceRooms) && r.reservations.length === 0).id;

    const headers = {
      authorization: token,
    };
    const data = {
      checkIn,
      checkOut,
      quantityDays,
      totalPrice: (quantityDays - 1 ) * priceRooms,
      roomId,
    };
    const method = 'post';
    const url = 'http://localhost:3001/reservation';

    const saveReservation = await fetchAPI(method, url, data, headers);

    setCheckIn('');
    setCheckOut('');
    setQuantityDays('');
    setPriceRooms('');

    getReservationClient(saveReservation.data.id);
  }

  const getReservationClient = async (id) => {
    const headers = {
      authorization: token,
    };
    const method = 'get';
    const url = `http://localhost:3001/reservation/${id}`;

    const getReservation = await fetchAPI(method, url, null, headers);

    setDoneReservation([...doneReservation, getReservation.data]);
  };

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
              placeholder="Check-in: aaaa/mm/dd"
              required
              value={ checkOut }
              onChange={ ({ target }) => {
                setCheckOut(target.value);
                diffDates(target.value);
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
                <option 
                  value=""
                >
                  Selecione
                </option>
            }
            { 
              rooms && rooms.map((e) => (
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