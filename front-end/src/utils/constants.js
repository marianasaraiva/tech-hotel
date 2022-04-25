export const url= {
  CLIENT: 'http://localhost:3001/client',
  LOGIN: 'http://localhost:3001/login', 
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