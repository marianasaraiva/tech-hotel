import React, { useContext } from 'react';
import Context from '../../context/Context';
import { ContainerError } from './style';

function Alert() {
  const { error, setError } = useContext(Context);

  return (
    <ContainerError>
      <h3>{ error }</h3> 
      <button
        type="button"
        onClick={ () => setError('') }
      >
        OK
      </button>
    </ContainerError>
  )
}

export default Alert;