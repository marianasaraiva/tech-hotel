import React, { useState, useEffect, useContext } from 'react';
import fetchAPI from '../../services/fetchApi';
import Context from '../../context/Context';

function Reservation() {
  const [checkIn, setCheckIn] = useState('');
  const [quantityDays, setQuantityDays] = useState('');
  const [priceRooms, setPriceRooms] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [rooms, setRooms] = useState('');

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

    console.log(saveReservation);

    setCheckIn('');
    setQuantityDays('');
    setPriceRooms('');

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
  </div>
  )
};

export default Reservation;