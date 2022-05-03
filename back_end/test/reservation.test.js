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
  
  describe('Quando há uma requisição GET para /reservation/:id', () => { 
    let response;
    before(async () => {
      sinon.stub(Reservation, 'findByPk')
        .resolves(mockReservations.reservation);

      response = await chai
        .request(server)
        .get('/reservation/1')
        .set('authorization', token);
    });

    after(() => {
      Reservation.findByPk.restore();
    });

    it('Requisição deve retornar código de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('A requisição GET para a rota traz um objeto contendo as propriedades da reserva cadastrada', () => {
      expect(response.body).to.deep.equal(mockReservations.reservation);
    });
  });

  describe('Quando há uma requisição PUT para /reservation/:id', () => {
    let response;
    
    describe('Requisição retorna com sucesso', () => {
      before(async () => {
        sinon.stub(Reservation, 'findByPk')
          .resolves(mockReservations.list[0]);
        sinon.stub(Reservation, 'update')
          .resolves([1]);
  
        response = await chai
          .request(server)
          .put('/reservation/1')
          .set('authorization', token)
          .send(mockReservations.newReservation);
      });
  
      after(() => {
        Reservation.findByPk.restore();
        Reservation.update.restore();
      });

      it('Requisição deve retornar código de status 200', () => {
        expect(response).to.have.status(200);
      });

      it('A requisição para a rota traz um objeto contendo uma mensagem de sucesso "Reservation updated successfully!"', () => {
        expect(response.body).to.deep.equal({ message: 'Reservation updated successfully!' });
      });
    });

    describe('Requisição retorna um erro', () => {
      describe('Quando a reserva não existe', () => {
        before(async () => {
          sinon.stub(Reservation, 'findByPk')
            .resolves(null);

          response = await chai
            .request(server)
            .put('/reservation/8')
            .set('authorization', token)
            .send(mockReservations.newReservation);
        });

        after(() => {
          Reservation.findByPk.restore();
        });
  
        it('Requisição deve retornar código de status 404', () => {
          expect(response).to.have.status(404);
        });
  
        it('A requisição para a rota traz um objeto contendo uma mensagem de erro "Reservation does not exist"', () => {
          expect(response.body).to.deep.equal({ message: 'Reservation does not exist' });
        });
      });

      describe('Quando não ocorre nenhuma atualização', () => {
        before(async () => {
          sinon.stub(Reservation, 'findByPk')
            .resolves(mockReservations.list[0]);
          sinon.stub(Reservation, 'update')
            .resolves([0]);
    
          response = await chai
            .request(server)
            .put('/reservation/1')
            .set('authorization', token)
            .send(mockReservations.newReservation);
        });
    
        after(() => {
          Reservation.findByPk.restore();
          Reservation.update.restore();
        });

        it('Requisição deve retornar código de status 404', () => {
          expect(response).to.have.status(404);
        });
  
        it('A requisição para a rota traz um objeto contendo uma mensagem de erro "Reservation is already updated"', () => {
          expect(response.body).to.deep.equal({ message: 'Reservation is already updated' });
        });
      });

      describe('Campo authorization não é informado', () => {
        before(async () => {
          response = await chai
            .request(server)
            .get('/reservation/1');
        });
  
        it('Requisição deve retornar código de status 401', () => {
          expect(response).to.have.status(401);
        });
  
        it('A requisição para a rota traz um objeto contendo uma mensagem de erro "Token not found"', () => {
          expect(response.body).to.deep.equal({ message: 'Token not found' });
        });
      });
  
      describe('Token informado no campo authorization é inválido', () => {
        before(async () => {
          response = await chai
            .request(server)
            .get('/reservation/1')
            .set('authorization', 'token inválido');
        });
  
        it('Requisição deve retornar código de status 401', () => {
          expect(response).to.have.status(401);
        });
  
        it('A requisição para a rota traz um objeto contendo uma mensagem de erro "Expired or invalid token"', () => {
          expect(response.body).to.deep.equal({ message: 'Expired or invalid token' });
        });
      });
    });
  });

  describe('Quando há uma requisição DELETE para /reservation/:id', () => {
    describe('Requisição retorna com sucesso', () => {
      before(async () => {
        sinon.stub(Reservation, 'findByPk')
          .resolves(mockReservations.list[0]);
        sinon.stub(Reservation, 'destroy')
          .resolves(1);
  
        response = await chai
          .request(server)
          .delete('/reservation/1')
          .set('authorization', token);
      });
  
      after(() => {
        Reservation.findByPk.restore();
        Reservation.destroy.restore();
      });

      it('Requisição deve retornar código de status 200', () => {
        expect(response).to.have.status(200);
      });

      it('A requisição para a rota traz um objeto contendo uma mensagem de sucesso "Reservation deleted successfully!"', () => {
        expect(response.body).to.deep.equal({ message: 'Reservation deleted successfully!' });
      });
    });

    describe('Quando a requisição retorna um erro', () => {
      describe('Quando o Reservation não existe', () => {
        before(async () => {
          sinon.stub(Reservation, 'findByPk')
            .resolves(null);
    
          response = await chai
            .request(server)
            .delete('/reservation/1')
            .set('authorization', token);
        });
    
        after(() => {
          Reservation.findByPk.restore();
        });
  
        it('Requisição deve retornar código de status 404', () => {
          expect(response).to.have.status(404);
        });
  
        it('A requisição para a rota traz um objeto contendo uma mensagem de erro "Reservation does not exist"', () => {
          expect(response.body).to.deep.equal({ message: 'Reservation does not exist' });
        });
      });

      describe('Campo authorization não é informado', () => {
        before(async () => {
          response = await chai
            .request(server)
            .get('/reservation/1');
        });
  
        it('Requisição deve retornar código de status 401', () => {
          expect(response).to.have.status(401);
        });
  
        it('A requisição para a rota traz um objeto contendo uma mensagem de erro "Token not found"', () => {
          expect(response.body).to.deep.equal({ message: 'Token not found' });
        });
      });
  
      describe('Token informado no campo authorization é inválido', () => {
        before(async () => {
          response = await chai
            .request(server)
            .get('/reservation/1')
            .set('authorization', 'token inválido');
        });
  
        it('Requisição deve retornar código de status 401', () => {
          expect(response).to.have.status(401);
        });
  
        it('A requisição para a rota traz um objeto contendo uma mensagem de erro "Expired or invalid token"', () => {
          expect(response.body).to.deep.equal({ message: 'Expired or invalid token' });
        });
      });
    });
  });
});