import React, { useState, useEffect } from 'react';
import fetchAPI from '../../services/fetchApi';


function Reservation() {
  const [checkIn, setCheckIn] = useState('');
  const [quantityDays, setQuantityDays] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [rooms, setRooms] = useState('');

  useEffect(() => {
    const getApiRooms = async () => {
      const method = 'get';
      const url = 'http://localhost:3001/room';

      const returnApiRooms = await fetchAPI(method, url, null);

      setRooms(returnApiRooms.data);
    };
    getApiRooms();
  }, []);

  console.log(rooms);

  const sendForm = async () => {


    setCheckIn('');
    setQuantityDays('');

    // navigate('');
  }

  return (<div>
    <h3>Reservation</h3>
    <form>
    <input
          id="checkIn"
          type="text"
          placeholder="Data de entrada"
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

        <button
          type="button"
          onClick={ sendForm }
          disabled={ disabled }
        >
          Enviar
        </button>
    </form>
  </div>
  )
};

export default Reservation;