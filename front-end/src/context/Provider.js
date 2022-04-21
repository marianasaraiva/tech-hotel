import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useLocalStorage from '../hooks/useLocalStorage';

function Provider({children}) {
  const [token, setToken] = useLocalStorage('token', '');

  const context = {
    token,
    setToken,
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