const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../src/api/app');
const generationToken = require('../src/helpers/generationToken');

const { Reservation, ReservationRoom } = require('../src/models');
const mockReservations = require('./mock/models/Reservations');
const mockClients = require('./mock/models/Clients');

chai.use(chaiHttp);

const { expect } = chai;

const data = {
  email: mockClients.list[0].email,
  id: mockClients.list[0].id
}

const token = generationToken(data);

describe('Testando rotas de Reservation', () => {
  describe('Quando há uma requisição GET para /reservation', () => {
    let response;

    before(async () => {
      sinon.stub(Reservation, 'findAll')
      .resolves(mockReservations.list);

      response = await chai
        .request(server)
        .get('/reservation');
    });

    after(() => {
      Reservation.findAll.restore();
    });

    it('Requisição deve retornar código de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('A requisição GET para a rota traz uma lista inicial contendo todas as reservas', () => {
        expect(response.body).to.deep.equal(mockReservations.list);
    });
  });

  describe('Quando há uma requisição POST para /reservation', () => {
    let response;

    before(async () => {
      sinon.stub(Reservation, 'create')
        .resolves(mockReservations.list[0]);

      sinon.stub(ReservationRoom, 'create')
        .resolves(null);

      response = await chai
        .request(server)
        .post('/reservation')
        .set('authorization', token)
        .send(mockReservations.newReservation);
    });

    after(() => {
      Reservation.create.restore();
    });

    it('Requisição deve retornar código de status 201', () => {
      expect(response).to.have.status(201);
    });

    it('A requisição POST para a rota traz um objeto contendo as propriedades da reserva cadastrada', () => {
      expect(response.body).to.deep.equal(mockReservations.list[0]);
    });
  });
});