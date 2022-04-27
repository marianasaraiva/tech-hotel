import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Header from '../../components/Header';
import Context from '../../context/Context';

import fetchAPI from '../../services/fetchApi';
import { validateData, validateFields } from '../../utils/loginValidate';
import { url, method } from '../../utils/constants';

import {
  ContainerLogin,
  ContainerForm,
  ContainerImage
} from './styles';
import Picture from '../../images/amsterda.jpg';

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

    const response = await fetchAPI(method.POST, url.LOGIN, data);
    
    if(response.err) {
      alert(response.data);
      return; 
    }

    setEmail('');
    setPassword('');

    setToken(response.data.token);

    navigate(`/reservation/${response.data.id}`);
  }

  return (
    <ContainerLogin>
      <ContainerForm>
        <Header/>
        <form>
          <h1>Login</h1>
          <input
            id="email"
            type="text"
            placeholder="E-mail"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />

          <input
            id="password"
            type="password"
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
        <span>Ainda não é cadastrado?</span>
        <Link to='/register'>Registre-se aqui</Link>  
      </ContainerForm>
      <ContainerImage>
        <img src={ Picture } alt={ Picture }></img>
      </ContainerImage>
    </ContainerLogin>
  )
}

export default Login;
