import React, { useEffect, useState } from 'react'
import fetchAPI from '../../services/fetchApi';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const validateData = () => {
      (email && password)
        ? setDisabled(false)
        : setDisabled(true)
    };
  
    validateData();
  }, [email, password]);

  const sendForm = async () => {
    const data = {
      email,
      password,
    };

    const method = 'post';
    const url = 'http://localhost:3001/login';

    const response = await fetchAPI(method, url, data);

    setEmail('');
    setPassword('');

    console.log(response.data.token);
  }

  return (
    <div>
      <h1>Login Page</h1>

      <form>
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

export default Login;
