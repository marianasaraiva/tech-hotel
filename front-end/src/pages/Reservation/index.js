import React, { useState, useEffect, useContext } from 'react';
import fetchAPI from '../../services/fetchApi';
import Context from '../../context/Context';

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
    const validateData = () => {
      (checkIn && quantityDays && priceRooms)
        ? setDisabled(false)
        : setDisabled(true)
    };

    validateData();
  }, [checkIn, quantityDays, priceRooms]);

  const sendForm = async () => {
    const roomId = rooms.find(r => r.price.includes(priceRooms) && r.reservations.length === 0).id;
    console.log(roomId);
    const headers = {
      authorization: token,
    };
    const data = {
      checkIn, 
      quantityDays,
      totalPrice: quantityDays * priceRooms,
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
    console.log(getReservation.data);
    setDoneReservation(getReservation.data);
  };

  return (<div>
    <h3>Reservation</h3>
    <form>
    <input
          id="checkIn"
          type="text"
          placeholder="Check-in: aaaa/mm/dd"
          value={ checkIn }
          onChange={ ({ target }) => setCheckIn(target.value) }
        />

        <input
          id="quantityDays"
          type="text"
          placeholder="Quantidade dias"
          value={ quantityDays }
          onChange={ ({ target }) => setQuantityDays(target.value) }
        />

        <select
          value={priceRooms}
          onChange={ ({ target }) => setPriceRooms(target.value) }
        >
        {!priceRooms &&
          <option 
          value=""
          >
          Selecione o seu quarto
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
          <p>{ doneReservation.client.fullName }</p>
        {/* <table>
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
          <thbody>
            <tr>
              <td>{ doneReservation.client.fullName }</td>
              <td>{ doneReservation.client.email }</td>
              <td>{ doneReservation.room.type }</td>
              <td>{ doneReservation.checkIn }</td>
              <td>{ `${doneReservation.quantityDays} dias` }</td>
              <td>{ `R$ ${doneReservation.totalPrice},00` }</td>
            </tr>
          </thbody>
        </table> */}
      </div>
     }
  </div>
  )
};

export default Reservation;