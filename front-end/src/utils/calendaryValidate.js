export const dateCalendary = (currentDay) => {
  let date = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

  if (currentDay) {
    date = new Date();
  }

  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  let year = date.getUTCFullYear();
  
  month = (+month < 10) && `0${month}`;

  return `${year}-${month}-${day}`;
}

export const diffDates = (checkIn, checkOut, days) => {
  let diff = Math.abs(new Date(checkIn
    .replace(/-/g,'/')) - new Date(checkOut.replace(/-/g,'/')));

    days(diff/1000/60/60/24);
}