export const validateData = (email, password, setDisabled) => {
  (email && password)
    ? setDisabled(false)
    : setDisabled(true)
};

export const validateFields = (email, password) => {
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
