import { method, url } from "../utils/constants";
import fetchAPI from "./fetchApi";

export const getApiRooms = async () => {
  const response = await fetchAPI(method.GET, url.ROOM);

  return response.data;
};
