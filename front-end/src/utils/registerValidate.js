export const validateData = (fullName, cpf, email, password, setDisabled) => {
  (fullName && cpf && email && password)
    ? setDisabled(false)
    : setDisabled(true)
};

export const validateFields = (fullName, cpf, email, password,) => {
  const validatefullName = fullName
    .match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/); 

  if(!validatefullName) {
    alert("Nome deve conter apenas letras, sem caracteres especiais");
    return true;
  }

  if (fullName.length < 3 || fullName.length > 50) {
    alert("Nome precisa ter no mínimo 3 caracteres e no máximo 50");
    return true;
  }

  if (cpf.length !== 11) {
    alert("CPF precisa ter 11 números, sem caracteres especiais");
    return true;
  }

  const regexValidateEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?$/i;
  const emailValidation = regexValidateEmail.test(String(email).toLowerCase());
  if (!emailValidation) {
    alert("E-mail precisa ter o seguinte formato: teste@teste.com");
    return true;
  }

  if (password.length < 6 || password.length > 30) {
    alert("Password precisa ter no mínimo 6 caracteres e no máximo 30");
    return true;
  }

  return null
};