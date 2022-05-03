const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../src/api/app');

const { Room } = require('../src/models');
const mockRooms = require('./mock/models/Rooms');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota de Room', () => {
  describe('Quando há uma requisição GET para /room', () => {
    let response;

    before(async () => {
      sinon.stub(Room, 'findAll')
        .resolves(mockRooms.list);

      response = await chai
        .request(server)
        .get('/room');
    });

    after(() => {
      Room.findAll.restore();
    });

    it('Requisição deve retornar código de status 200', () => {
        expect(response).to.have.status(200);
    });

    it('A requisição GET para a rota traz uma lista inicial contendo todos os Rooms', () => {
        expect(response.body).to.deep.equal(mockRooms.list);
    });
  });
});
