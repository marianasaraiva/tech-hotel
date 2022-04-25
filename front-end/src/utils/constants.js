export const url= {
  ROOM: 'http://localhost:3001/room',
  RESERVATION: 'http://localhost:3001/reservation',
};

export const method = {
  POST: 'post',
  GET: 'get',
  PUT: 'put',
  DELETE: 'delete',
};

export const headers = (token) => ({ 
    authorization: token,
});