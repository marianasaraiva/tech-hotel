import React from 'react';

function Alert({ message, setError }) {
  return (
    <div>
      <h3>{ message }</h3> 
      <button
        type="button"
        onClick={ () => setError('') }
      >
        OK
      </button>
    </div>
  )
}

export default Alert;