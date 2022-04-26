import { headers, method, url } from "../utils/constants";
import fetchAPI from "./fetchApi";

export const getReservationClient = async (reservationId, token, doneReservation, setDoneReservation) => {
  const getReservation = await
    fetchAPI(method.GET,`${url.RESERVATION}/${reservationId}`, null, headers(token));

  setDoneReservation([...doneReservation, getReservation.data]);
};
