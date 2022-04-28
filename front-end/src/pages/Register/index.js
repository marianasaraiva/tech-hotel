import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';

import fetchAPI from '../../services/fetchApi';
import { validateData, validateFields } from '../../utils/registerValidate';
import { url, method } from '../../utils/constants';

import {
  ContainerForm,
  ContainerMain,
  ContainerImage
} from './styles';
import Pictures from '../../images/amsterdam.jpg';
import Context from '../../context/Context';
import Alert from '../../components/Alert';

function Register() {
  const [fullName, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const { error, setError } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    validateData(fullName, cpf, email, password, setDisabled);
  }, [fullName, cpf, email, password]);

  const sendForm = async () => {
    const validateTrue = validateFields(fullName, cpf, email, password, setError);
    if (validateTrue) return;

    const data = {
      fullName,
      cpf,
      email,
      password,
    };

    const response = await fetchAPI(method.POST, url.CLIENT, data);

    if(response.err) {
      setError(response.data);
      return; 
    }

    setFullName('');
    setCpf('');
    setEmail('');
    setPassword('');

    navigate('/login');
  }

  return (
    <ContainerMain>
      <ContainerForm>
        <Header/>
        <form>
          { 
           error && <Alert />
          }
          <h1>Register</h1>
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
      </ContainerForm>
      <ContainerImage>
        <img src={ Pictures } alt="Pictures" />
      </ContainerImage>
    </ContainerMain>
  )
}

export default Register;
