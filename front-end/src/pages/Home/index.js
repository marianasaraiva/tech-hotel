import React from 'react';
import { ContainerMain } from './styles';
import Header from '../../components/Header';

function Home() {
  return (
    <div>
      <Header/>
      <ContainerMain>
        <h1>TECH HOTEL</h1>
        <p>Seja bem vindo ao <span>Tech Hotel</span>!</p>
      </ContainerMain>
    </div>
  )
}

export default Home;
