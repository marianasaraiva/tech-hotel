const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../src/api/app');
const generationToken = require('../src/helpers/generationToken');

const { Reservation } = require('../src/models');
const mockReservations = require('./mock/models/Reservations.json');

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
});