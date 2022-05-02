const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../src/api/app');

const { Client } = require('../src/models');
const mockClients = require('./mock/models/Clients');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rotas de Login', () => {
  describe('Quando há uma requisição POST para /login', () => {
    let response;

    const login = {
      "email": mockClients[0].email,
      "password": mockClients[0].password
    }

    describe('Requisição retorna com sucesso', () => {
      before(async () => {
        sinon.stub(Client, 'findOne')
          .resolves(mockClients[0]);

        response = await chai
          .request(server)
          .post('/login')
          .send(login);
      });

      after(() => {
        Client.findOne.restore();
      });

      it('Requisição deve retornar código de status 200', () => {
        expect(response).to.have.status(200);
      });

      it('A requisição POST para a rota traz um objeto contendo o id do cliente e um token', () => {
        expect(response.body).to.deep.equal({ id: mockClients[0].id, token: response.body.token });
      });
    });

    describe('Requisição retorna um erro', () => {
      before(async () => {
        sinon.stub(Client, 'findOne')
          .resolves(null);

        response = await chai
          .request(server)
          .post('/login')
          .send(login);
      });

      after(() => {
        Client.findOne.restore();
      });

      it('Requisição deve retornar código de status 400', () => {
        expect(response).to.have.status(400);
      });

      it('A requisição POST para a rota traz um objeto contendo uma mensagem de erro "Invalid fields"', () => {
        expect(response.body).to.deep.equal({ message: 'Invalid fields' });
      });
    });
  });
});