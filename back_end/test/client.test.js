const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../src/api/app');
const generationToken = require('../src/helpers/generationToken');

const { Client } = require('../src/models');
const mockClients = require('./mock/models/Clients');

chai.use(chaiHttp);

const { expect } = chai;

const data = {
  email: mockClients.list[0].email,
  id: mockClients.list[0].id
}

const token = generationToken(data);

describe('Testando rotas de Client', () => {
  describe('Quando há uma requisição GET para /client', () => {
    let response;

    before(async () => {
      sinon.stub(Client, 'findAll')
        .resolves(mockClients.list);

      response = await chai
        .request(server)
        .get('/client');
    });

    after(() => {
      Client.findAll.restore();
    });

    it('Requisição deve retornar código de status 200', () => {
        expect(response).to.have.status(200);
    });

    it('A requisição GET para a rota traz uma lista inicial contendo todos os clientes', () => {
        expect(response.body).to.deep.equal(mockClients.list);
    });
  });

  describe('Quando há uma requisição POST para /client', () => {
    let response;

    describe('Requisição retorna com sucesso', () => {
      before(async () => {
        sinon.stub(Client, 'create')
          .resolves(mockClients.list[0]);
        sinon.stub(Client, 'findOne')
          .onCall(0)
          .resolves(null)
          .onCall(1)
          .resolves(null);
  
        response = await chai
          .request(server)
          .post('/client')
          .send(mockClients.newClient);
      });
  
      after(() => {
        Client.create.restore();
        Client.findOne.restore();
      });

      it('Requisição deve retornar código de status 201', () => {
        expect(response).to.have.status(201);
      });

      it('A requisição POST para a rota traz um objeto contendo as propriedades do cliente cadastrado', () => {
        expect(response.body).to.deep.equal(mockClients.list[0]);
      });
    });

    describe('Requisição retorna um erro por conta do E-mail', () => {
      before(async () => {
        sinon.stub(Client, 'create')
          .resolves(mockClients.list[0]);

        sinon.stub(Client, 'findOne')
          .onCall(0)
          .resolves(mockClients.list[0])
          .onCall(1)
          .resolves(null);
  
        response = await chai
          .request(server)
          .post('/client')
          .send(mockClients.newClient);
      });
  
      after(() => {
        Client.create.restore();
        Client.findOne.restore();
      });

      it('Essa requisição deve retornar código de status 409', () => {
        expect(response).to.have.status(409);
      });

      it('A requisição POST para a rota traz uma messagem de erro "E-mail already exists"', () => {
        expect(response.body).to.deep.equal({ message: 'E-mail already exists' });
      });
    });

    describe('Requisição retorna um erro por conta do CPF', () => {
      before(async () => {
        sinon.stub(Client, 'create')
          .resolves(mockClients.list[0]);

        sinon.stub(Client, 'findOne')
          .onCall(0)
          .resolves(null)
          .onCall(1)
          .resolves(mockClients.list[0])
  
        response = await chai
          .request(server)
          .post('/client')
          .send(mockClients.newClient);
      });
  
      after(() => {
        Client.create.restore();
        Client.findOne.restore();
      });

      it('Essa requisição deve retornar código de status 409', () => {
        expect(response).to.have.status(409);
      });

      it('A requisição POST para a rota traz uma messagem de erro "CPF already exists"', () => {
        expect(response.body).to.deep.equal({ message: 'CPF already exists' });
      });
    });
  });

  describe('Quando há uma requisição GET para /client/:id', () => {
    let response;

    describe('Requisição retorna com sucesso', () => {
      before(async () => {
        sinon.stub(Client, 'findByPk')
          .resolves(mockClients.client);
  
        response = await chai
          .request(server)
          .get('/client/1')
          .set('authorization', token);
      });
  
      after(() => {
        Client.findByPk.restore();
      });

      it('Requisição deve retornar código de status 200', () => {
        expect(response).to.have.status(200);
      });

      it('A requisição POST para a rota traz um objeto contendo as propriedades do cliente cadastrado', () => {
        expect(response.body).to.deep.equal(mockClients.client);
      });
    });

    describe('Requisição retorna um erro', () => {
      before(async () => {
        sinon.stub(Client, 'findByPk')
          .resolves(null);
  
        response = await chai
          .request(server)
          .get('/client/1')
          .set('authorization', token);
      });
  
      after(() => {
        Client.findByPk.restore();
      });

      it('Requisição deve retornar código de status 404', () => {
        expect(response).to.have.status(404);
      });

      it('A requisição POST para a rota traz um objeto contendo uma mensagem de erro "User does not exist"', () => {
        expect(response.body).to.deep.equal({ message: 'User does not exist' });
      });
    });

    describe('Campo authorization não é informado', () => {
      before(async () => {
        response = await chai
          .request(server)
          .get('/client/1');
      });

      it('Requisição deve retornar código de status 401', () => {
        expect(response).to.have.status(401);
      });

      it('A requisição POST para a rota traz um objeto contendo uma mensagem de erro "Token not found"', () => {
        expect(response.body).to.deep.equal({ message: 'Token not found' });
      });
    });

    describe('Token informado no campo authorization é inválido', () => {
      before(async () => {
        response = await chai
          .request(server)
          .get('/client/1')
          .set('authorization', 'token inválido');
      });

      it('Requisição deve retornar código de status 401', () => {
        expect(response).to.have.status(401);
      });

      it('A requisição POST para a rota traz um objeto contendo uma mensagem de erro "Expired or invalid token"', () => {
        expect(response.body).to.deep.equal({ message: 'Expired or invalid token' });
      });
    });
  });

  describe('Quando há uma requisição PUT para /client/:id', () => {
    let response;

    describe('Requisição retorna com sucesso', () => {
      before(async () => {
        sinon.stub(Client, 'findByPk')
          .resolves(mockClients.list[0]);
        sinon.stub(Client, 'update')
          .resolves([1]);
  
        response = await chai
          .request(server)
          .put('/client/1')
          .set('authorization', token)
          .send(mockClients.newClient);
      });
  
      after(() => {
        Client.findByPk.restore();
        Client.update.restore();
      });

      it('Requisição deve retornar código de status 200', () => {
        expect(response).to.have.status(200);
      });

      it('A requisição PUT para a rota traz um objeto contendo uma mensagem de sucesso "Client registered successfully!"', () => {
        expect(response.body).to.deep.equal({ message: 'Client registered successfully!' });
      });
    });

    describe('Requisição retorna um erro', () => {
      describe('Quando o cliente não existe', () => {
        before(async () => {
          sinon.stub(Client, 'findByPk')
            .resolves(null);

          response = await chai
            .request(server)
            .put('/client/8')
            .set('authorization', token)
            .send(mockClients.newClient);
        });

        after(() => {
          Client.findByPk.restore();
        });
  
        it('Requisição deve retornar código de status 404', () => {
          expect(response).to.have.status(404);
        });
  
        it('A requisição PUT para a rota traz um objeto contendo uma mensagem de erro "User does not exist"', () => {
          expect(response.body).to.deep.equal({ message: 'User does not exist' });
        });
      });

      describe('Quando não ocorre nenhuma atualização', () => {
        before(async () => {
          sinon.stub(Client, 'findByPk')
            .resolves(mockClients.list[0]);
          sinon.stub(Client, 'update')
            .resolves([0]);
    
          response = await chai
            .request(server)
            .put('/client/1')
            .set('authorization', token)
            .send(mockClients.newClient);
        });
    
        after(() => {
          Client.update.restore();
          Client.findByPk.restore();
        });

        it('Requisição deve retornar código de status 404', () => {
          expect(response).to.have.status(404);
        });
  
        it('A requisição PUT para a rota traz um objeto contendo uma mensagem de erro "Client is already updated"', () => {
          expect(response.body).to.deep.equal({ message: 'Client is already updated' });
        });
      });

      describe('Campo authorization não é informado', () => {
        before(async () => {
          response = await chai
            .request(server)
            .get('/client/1');
        });
  
        it('Requisição deve retornar código de status 401', () => {
          expect(response).to.have.status(401);
        });
  
        it('A requisição POST para a rota traz um objeto contendo uma mensagem de erro "Token not found"', () => {
          expect(response.body).to.deep.equal({ message: 'Token not found' });
        });
      });
  
      describe('Token informado no campo authorization é inválido', () => {
        before(async () => {
          response = await chai
            .request(server)
            .get('/client/1')
            .set('authorization', 'token inválido');
        });
  
        it('Requisição deve retornar código de status 401', () => {
          expect(response).to.have.status(401);
        });
  
        it('A requisição POST para a rota traz um objeto contendo uma mensagem de erro "Expired or invalid token"', () => {
          expect(response.body).to.deep.equal({ message: 'Expired or invalid token' });
        });
      });
    });
  });

  describe('Quando há uma requisição DELETE para /client/:id', () => {
    describe('Requisição retorna com sucesso', () => {
      before(async () => {
        sinon.stub(Client, 'destroy')
          .resolves(1);
        sinon.stub(Client, 'findByPk')
          .resolves(mockClients.list[0]);
  
        response = await chai
          .request(server)
          .delete('/client/1')
          .set('authorization', token);
      });
  
      after(() => {
        Client.destroy.restore();
        Client.findByPk.restore();
      });

      it('Requisição deve retornar código de status 200', () => {
        expect(response).to.have.status(200);
      });

      it('A requisição PUT para a rota traz um objeto contendo uma mensagem de sucesso "Client deleted successfully!"', () => {
        expect(response.body).to.deep.equal({ message: 'Client deleted successfully!' });
      });
    });

    describe('Quando a requisição retorna um erro', () => {
      describe('Quando o cliente não existe', () => {
        before(async () => {
          sinon.stub(Client, 'findByPk')
            .resolves(null);
    
          response = await chai
            .request(server)
            .delete('/client/1')
            .set('authorization', token);
        });
    
        after(() => {
          Client.findByPk.restore();
        });
  
        it('Requisição deve retornar código de status 404', () => {
          expect(response).to.have.status(404);
        });
  
        it('A requisição PUT para a rota traz um objeto contendo uma mensagem de erro "User does not exist"', () => {
          expect(response.body).to.deep.equal({ message: 'Client does not exist' });
        });
      });

      describe('Campo authorization não é informado', () => {
        before(async () => {
          response = await chai
            .request(server)
            .get('/client/1');
        });
  
        it('Requisição deve retornar código de status 401', () => {
          expect(response).to.have.status(401);
        });
  
        it('A requisição POST para a rota traz um objeto contendo uma mensagem de erro "Token not found"', () => {
          expect(response.body).to.deep.equal({ message: 'Token not found' });
        });
      });
  
      describe('Token informado no campo authorization é inválido', () => {
        before(async () => {
          response = await chai
            .request(server)
            .get('/client/1')
            .set('authorization', 'token inválido');
        });
  
        it('Requisição deve retornar código de status 401', () => {
          expect(response).to.have.status(401);
        });
  
        it('A requisição POST para a rota traz um objeto contendo uma mensagem de erro "Expired or invalid token"', () => {
          expect(response.body).to.deep.equal({ message: 'Expired or invalid token' });
        });
      });
    });
  });
});
