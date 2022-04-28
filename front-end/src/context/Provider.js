import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useLocalStorage from '../hooks/useLocalStorage';

function Provider({children}) {
  const [token, setToken] = useLocalStorage('token', '');
  const [doneReservation, setDoneReservation] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(false);

  const context = {
    token,
    setToken,
    doneReservation,
    setDoneReservation,
    rooms,
    setRooms,
    error,
    setError,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider;