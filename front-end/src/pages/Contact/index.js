import React, { useEffect, useState } from 'react';

function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [sendMessage, setSendMessage] = useState(true);

  useEffect(() => {
    const validateData = () => {
      (email && message)
        ? setDisabled(false)
        : setDisabled(true)
    };

    validateData();
  }, [email, message]);

  const sendForm = () => {
    setFullName('');
    setEmail('');
    setMessage('');

    setSendMessage(false);
    // navigate('/login');
  }

  return (
    <div>
      <div>
        {
          sendMessage
          ?
            <div>
              <h1>Entre em contato conosco</h1>
              <p>Tire todas as suas dúvidas ou envie suas sugestões para nossa equipe.</p>
            </div>
          :
          <div>
            <h3>Agradecemos o contato! Em breve entraremos em contato com você</h3>
          </div>
        }
      </div>
      
      <div>
        <div>
          <h3>Envie sua mensagem</h3>
          <p>Entre em contato com a equipe do Tech Hotel através do nosso e-mail suporte@tech_hotel.com.br ou preenchendo o formulário de contato ao lado.</p>
        </div>

        <div>
          <h3>Formulário de mensagens online</h3>
          <form>
          <input
              id="fullName"
              type="text"
              placeholder="Nome Completo"
              value={ fullName }
              onChange={ ({ target }) => setFullName(target.value) }
            />

            <input
              id="email"
              type="text"
              placeholder="E-mail"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
            />

            <textarea
              id="message"
              type="text"
              placeholder="Mensagem"
              value={ message }
              onChange={ ({ target }) => setMessage(target.value) }
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
      </div>
    </div>
  )
}

export default Contact;
