import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Termos from './pages/Termos';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Logon} />
        <Route path='/register' component={Register} />
        <Route path='/termos' component={Termos} />
      </Switch>
    </BrowserRouter>
  )
};