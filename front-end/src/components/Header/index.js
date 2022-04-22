import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './styles';

function Header() {
  return (
    <NavBar>
      <Link to="/">Tech Hotel</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/reservation">Reservation</Link>
      <Link to="/contact">Contact</Link>
    </NavBar>
  )
}

export default Header;