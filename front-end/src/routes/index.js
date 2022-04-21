import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Reservation from '../pages/Reservation';

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/login" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />
      <Route path="/reservation" element={ <Reservation/> } />
    </Routes>
  );
}

export default RoutesComponent;