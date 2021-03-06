const list = [
  {
    id: 1,
    fullName: 'Jonatas Passos',
    cpf: '12345678900',
    password: '123456',
    email: 'jonatas@gmail.com',
    active: true
  },
  {
    id: 2,
    fullName: 'Mariana Saraiva',
    cpf: '12345678911',
    password: '123456',
    email: 'mari@gmail.com',
    active: true
  },
  {
    id: 3,
    fullName: 'Nathalia Miranda',
    cpf: '12345678922',
    password: '123456',
    email: 'nath@gmail.com',
    active: true
  }
];

const client = {
  id: 1,
  fullName: 'Jonatas Passos',
  cpf: '12345678900',
  password: '123456',
  email: 'jonatas@gmail.com',
  active: true,
  reservations: []
}

const newClient = {
  "fullName": "Jonatas Passos",
  "cpf": "12345678900",
  "password": "123456",
  "email": "jonatas@gmail.com"
}

module.exports = {
  list,
  newClient,
  client
};