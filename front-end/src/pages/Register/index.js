import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import fetchAPI from '../../services/fetchApi';
import { validateData, validateFields } from '../../utils/registerValidate';
import { ContainerForm, ContainerMain, ContainerImage } from './styles';
import Pictures from '../../images/amsterdam.jpg';
import Header from '../../components/Header';

function Register() {
  const [fullName, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    validateData(fullName, cpf, email, password, setDisabled);
  }, [fullName, cpf, email, password]);

  const sendForm = async () => {
    const validateTrue = validateFields(fullName, cpf, email, password);
    if (validateTrue) return;

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

    navigate('/login');
  }

  return (
    <ContainerMain>
      <ContainerForm>
        <Header/>
        <form>        
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
