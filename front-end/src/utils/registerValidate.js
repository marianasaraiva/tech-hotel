export const validateData = (fullName, cpf, email, password, setDisabled) => {
  (fullName && cpf && email && password)
    ? setDisabled(false)
    : setDisabled(true)
};

export const validateFields = (fullName, cpf, email, password,) => {
  if (fullName.length < 3 && typeof fullName !== "number") {
    alert("Nome precisa ter no mínimo 3 caracteres e não conter números");
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

  if (password.length < 6) {
    alert("Password precisa ter no mínimo 6 caracteres");
    return true;
  }

  return null
};