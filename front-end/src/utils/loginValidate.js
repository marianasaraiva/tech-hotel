export const validateData = (email, password, setDisabled) => {
  (email && password)
    ? setDisabled(false)
    : setDisabled(true)
};

export const validateFields = (email, password, setError) => {
  const regexValidateEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?$/i;
  const emailValidation = regexValidateEmail.test(String(email).toLowerCase());
  if (!emailValidation) {
    setError("E-mail precisa ter o seguinte formato: teste@teste.com");
    return true;
  }

  if (password.length < 6) {
    setError("Password precisa ter no mínimo 6 caracteres");
    return true;
  }

  return null
};
