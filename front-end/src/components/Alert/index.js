import React, { useContext } from 'react';
import Context from '../../context/Context';

function Alert(message) {
  const { setAlert } = useContext(Context);
  return (
    <div>
      <h3>{ message }</h3> 
      <button
        type="button"
        onClick={ setAlert(false) }
      >
        OK
      </button>
    </div>
  )
}

export default Alert;