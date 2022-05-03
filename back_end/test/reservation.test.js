const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../src/api/app');
const generationToken = require('../src/helpers/generationToken');

const { Reservation, ReservationRoom } = require('../src/models');
const mockReservations = require('./mock/models/Reservations.json');
const mockClients = require('./mock/models/Clients.json');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rotas de Reservation', () => {
  describe('Quando há uma requisição GET para /reservation', () => {
    let response;

    before(async () => {
      sinon.stub(Reservation, 'findAll')
      .resolves(mockReservations);

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
        expect(response.body).to.deep.equal(mockReservations);
    });
  });

  describe('Quando há uma requisição POST para /reservation', () => {
    let response;

    const newReservation = {
      "checkIn": "2022-05-15",
      "checkOut":"2022-05-20",
      "quantityDays": 3,
      "totalPrice": 2100,
      "roomId": 2
    }

    const data = {
      email: mockClients[0].email,
      id: mockClients[0].id
    }
  
    const token = generationToken(data);

    describe('Requisição retorna com sucesso', () => {
      before(async () => {
        sinon.stub(Reservation, 'create')
          .resolves(mockReservations[0]);

        sinon.stub(ReservationRoom, 'create')
          .resolves(null);
  
        response = await chai
          .request(server)
          .post('/reservation')
          .set('authorization', token)
          .send(newReservation);
      });
  
      after(() => {
        Reservation.create.restore();
      });

      it('Requisição deve retornar código de status 201', () => {
        expect(response).to.have.status(201);
      });

      it('A requisição POST para a rota traz um objeto contendo as propriedades da reserva cadastrada', () => {
        expect(response.body).to.deep.equal(mockReservations[0]);
      });
    });
  });
});