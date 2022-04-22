export const validateData = (checkIn, quantityDays, priceRooms, setDisabled) => {
  (checkIn && quantityDays && priceRooms)
    ? setDisabled(false)
    : setDisabled(true)
};

export const validateFields = (checkIn, quantityDays) => {
  const regexValidaDate =  /(\d{4})[-.-](\d{2})[-.-](\d{2})/.exec(checkIn);
  if (!regexValidaDate) {
    alert("Date precisa ter o seguinte formato: ANO-MÊS-DIA");
    return true;
  }

  if (Number(quantityDays) < 1) {
    alert("Quantidade de dias precisa ser maior que zero");
    return true;
  }

  return null
};
