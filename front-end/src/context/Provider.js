import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({children}) {
  const [test, setTest] = useState('');
  const context = {
    test,
    setTest,
  };

  return (
    <Context.Provider values={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider;