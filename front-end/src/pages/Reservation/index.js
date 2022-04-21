import React, { useState, useEffect, useContext } from 'react';
import fetchAPI from '../../services/fetchApi';
import Context from '../../context/Context';
import { validateData, validateFields } from '../../utils/reservationValidate';

function Reservation() {
  const [checkIn, setCheckIn] = useState('');
  const [quantityDays, setQuantityDays] = useState('');
  const [priceRooms, setPriceRooms] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [rooms, setRooms] = useState('');
  const [doneReservation, setDoneReservation] = useState('');

  const { token } = useContext(Context);

  useEffect(() => {
    const getApiRooms = async () => {
      const method = 'get';
      const url = 'http://localhost:3001/room';

      const returnApiRooms = await fetchAPI(method, url);

      setRooms(returnApiRooms.data);
    };
    getApiRooms();
  }, []);

  useEffect(() => {
    validateData(checkIn, quantityDays, priceRooms, setDisabled);
  }, [checkIn, quantityDays, priceRooms]);

  const sendForm = async () => {
    const validateTrue = validateFields(checkIn, quantityDays);
    if (validateTrue) return;

    const roomId = rooms.find(r => r.price.includes(priceRooms) && r.reservations.length === 0).id;

    const headers = {
      authorization: token,
    };
    const data = {
      checkIn, 
      quantityDays,
      totalPrice: (quantityDays - 1 ) * priceRooms,
      roomId,
    };
    const method = 'post';
    const url = 'http://localhost:3001/reservation';

    const saveReservation = await fetchAPI(method, url, data, headers);

    setCheckIn('');
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

    setDoneReservation(getReservation.data);
  };

  return (
    <div>
      <h3>Reservation</h3>
      <form>
        <label htmlFor="checkIn">
          Check-in
          <input
            id="checkIn"
            type="date"
            placeholder="Check-in: aaaa/mm/dd"
            required
            value={ checkIn }
            onChange={ ({ target }) => setCheckIn(target.value) }
          />
        </label>

        <label htmlFor="checkOut">
          Quantidade dias
          <input
            id="quantityDays"
            type="text"
            placeholder="Quantidade dias"
            required
            value={ quantityDays }
            onChange={ ({ target }) => setQuantityDays(target.value) }
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
      </form>
      {
        doneReservation &&
        <div>
          <h3>Reserva concluída sucesso!</h3> 
          <table aling="center" border="1">
            <thead>
              <tr>
                <th>Nome completo</th>
                <th>E-mail</th>
                <th>Quarto</th>
                <th>Check-in</th>
                <th>Estadia</th>
                <th>Preço total da reserva</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ doneReservation.client.fullName }</td>
                <td>{ doneReservation.client.email }</td>
                <td>{ doneReservation.rooms[0].type }</td>
                <td>{ doneReservation.checkIn }</td>
                <td>{ `${doneReservation.quantityDays} dias` }</td>
                <td>{ `R$ ${doneReservation.totalPrice},00` }</td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    </div>
  )
};

export default Reservation;