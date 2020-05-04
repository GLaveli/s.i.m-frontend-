import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Eula from './pages/Eula';
import Works from './pages/Works';
import Newbudget from './pages/Newbudget';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Logon} />
        <Route path='/register' component={Register} />
        <Route path='/termos' component={Eula} />
        <Route path='/works' component={Works} />
        <Route path='/newbudget' component={Newbudget} />
      </Switch>
    </BrowserRouter>
  )
};