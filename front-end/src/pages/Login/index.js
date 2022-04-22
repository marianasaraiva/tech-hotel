import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import fetchAPI from '../../services/fetchApi';
import Context from '../../context/Context';
import { validateData, validateFields } from '../../utils/loginValidate';
import { ContainerLogin } from './styles';

function Login() {
  const { setToken } = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    validateData(email, password, setDisabled);
  }, [email, password]);

  const sendForm = async () => {
    const validateTrue = validateFields(email, password);
    if (validateTrue) return;

    const data = {
      email,
      password,
    };

    const method = 'post';
    const url = 'http://localhost:3001/login';

    const response = await fetchAPI(method, url, data);

    setEmail('');
    setPassword('');

    setToken(response.data.token);

    navigate(`/reservation/${response.data.id}`);
  }

  return (
    <ContainerLogin>
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

      <p>
        <span>Ainda não é cadastrado?</span>
        <Link to='/register'>Registre-se aqui</Link>
      </p>
    </ContainerLogin>
  )
}

export default Login;
