import React, { useContext } from 'react';
import Context from '../../context/Context';
import { ContainerError } from './style';

function Alert() {
  const { error, setError } = useContext(Context);

  return (
    <ContainerError>
      <div>
        <h3>{ error }</h3> 
        <button
          type="button"
          onClick={ () => setError('') }
        >
          OK
        </button>
      </div>
    </ContainerError>
  )
}

export default Alert;