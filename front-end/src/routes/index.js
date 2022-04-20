import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Cadastro from '../pages/Register';

function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/cadastro" component={ Cadastro } />
    </Switch>
  );
}

export default Routes;