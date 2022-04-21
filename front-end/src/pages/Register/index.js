import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import fetchAPI from '../../services/fetchApi';

function Register() {
  const [fullName, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const validateData = () => {
      (fullName && cpf && email && password)
        ? setDisabled(false)
        : setDisabled(true)
    };
  
    validateData();
  }, [fullName, cpf, email, password]);

  const sendForm = async () => {
    const data = {
      fullName,
      cpf,
      email,
      password,
    };

    const method = 'post';
    const url = 'http://localhost:3001/client';

    await fetchAPI(method, url, data);

    setFullName('');
    setCpf('');
    setEmail('');
    setPassword('');

    history.push('/login');
  }

  return (
    <div>
      <h1>Register Page</h1>

      <form>
        <input
          id="fullName"
          type="text"
          placeholder="Nome completo"
          value={ fullName }
          onChange={ ({ target }) => setFullName(target.value) }
        />

        <input
          id="cpf"
          type="text"
          placeholder="CPF"
          value={ cpf }
          onChange={ ({ target }) => setCpf(target.value) }
        />

        <input
          id="email"
          type="text"
          placeholder="E-mail"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />

        <input
          id="password"
          type="text"
          placeholder="Password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
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
}

export default Register;
