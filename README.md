# :computer: Tech-Hotel

Desenvolvimento de aplicação Full Stack, construindo uma API para gerenciar as informações de reservas de um hotel.

## :pushpin: Telas do projeto:
<h3 align="center">Page Home and Contact</h3>
<p align="center">
  <img src="https://github.com/marianasaraiva/tech-hotel/blob/master/front-end/src/midias/PageContact.gif" alt="Tech Hotel Gif"/>
</p>
<h3 align="center">Page Register and Login</h3>
<p align="center">
  <img src="https://github.com/marianasaraiva/tech-hotel/blob/master/front-end/src/midias/PageRegisterAndLogin.gif" alt="Tech Hotel Gif"/>
</p>
<h3 align="center">Page Reservation</h3>
<p align="center">
  <img src="https://github.com/marianasaraiva/tech-hotel/blob/master/front-end/src/midias/PageReservation.gif" alt="Tech Hotel Gif"/>
</p>

## :pushpin: Back-end

### Habilidades

Manipulação do sequelize para implementação do banco de dados e das tabelas.

Realizado o CRUD da aplicação com `ORM`.

Libs utilizadas no módulo de Back end:

- express
- sequelize
- sequelize-cli
- nodemon
- mysql2
- dotenv
- cors
- joi
- jsonwebtoken

Desenvolvido arquitetura de softwares, utilizando o modelo MSC(Model, Controller and Services).

Utilização do conceito de Arquitetura REST.


### O que foi desenvolvido

Nesse projeto foi desenvolvido uma API de um CRUD (Create, Read, Update e Delete) de reservas de um hotel, com endpoints que irão permitir a interação do usuário com a interface de navegação, transmitindo as informações até o administrador.

Criação dos devidos relacionamentos, utilizando normalização de tabelas.

Criação de migrations, seeders e models para estruturar e popular o banco de dados.

Implementação do CRUD das rotas Login, Client, Reservation e Rooms, de acordo com as regras de negócio.


### Documentação da API

[Acesse a documentação aqui](https://documenter.getpostman.com/view/20097451/UyxbsqtS)


## :pushpin: Front-end

### Habilidades

Manipulação do Reactjs utilizando componentes funcionais com hooks e context API. 

Criação de Hooks customizados para agilizar no desenvolvimento.

Libs utilizadas:
- styled components
- react router dom

Utilização do modelo atomic design pattern, aplicado para legibilidade, escalabilidade e legiibilidade do código, para estruturar seu aplicativo em React.


### O que foi desenvolvido

Desenvolvimento da interface de uma aplicação de hotel, para realizar reservas, selecionar filtros e compartilhar as informações selecionadas pelo usuário comunicando com o back end.

Criação do CSS puro, utilizando styled components.

Design responsivo, pensando em telas e dimensões diversas dos equipamentos.


## :pushpin: Docker :wrench:

### Habilidades

Criar um contêiner Docker para o banco de dados mysql.

Criar um contêiner Docker para uma aplicação de front-end.

Criar um contêiner Docker para uma aplicação de back-end.

Orquestrar os três contêineres utilizando o Docker compose.


### O que foi desenvolvido

Habilidade de utilizar o Docker para uma aplicação FullStack utilizando Docker compose.


## :pushpin: Como acessar o projeto

1. Clone e rode o projeto localmente:
    * `git clone git@github.com:marianasaraiva/tech-hotel.git`
    * `npm install`
    * configurar as variaveis de ambiente, conforme arquivo `.env.example`
    * ter o ambiente configurado para utilizar docker
    * `docker-compose up`


## :thought_balloon: Autores

- GitHub - [Jonatas Passos](https://github.com/jonataspassos96)
- GitHub - [Mariana Saraiva](https://github.com/marianasaraiva)
- GitHub - [Nathalia Miranda](https://github.com/nathaliamiranda)

