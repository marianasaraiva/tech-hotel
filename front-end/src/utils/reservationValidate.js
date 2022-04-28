export const validateData = (checkIn, checkOut, quantityDays, priceRooms, setDisabled) => {
  (checkIn && checkOut && quantityDays && priceRooms)
    ? setDisabled(false)
    : setDisabled(true)
};

export const validateFields = (checkIn, checkOut) => {
  const regexValidaDateCheckIn =  /(\d{4})[-.-](\d{2})[-.-](\d{2})/.exec(checkIn);

  const regexValidaDateCheckOut =  /(\d{4})[-.-](\d{2})[-.-](\d{2})/.exec(checkOut);

  if (!regexValidaDateCheckIn && !regexValidaDateCheckOut) {
    alert("Date precisa ter o seguinte formato: ANO-MÊS-DIA");
    return true;
  }

  return null;
};
