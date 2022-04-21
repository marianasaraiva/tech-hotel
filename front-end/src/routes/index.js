import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Reservation from '../pages/Reservation';

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />
      <Route path="/reservation" element={ <Reservation/> } />
      <Route path="/contact" element={ <Contact/> } />
    </Routes>
  );
}

export default RoutesComponent;