import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Eula from './pages/Eula';
import Budget from './pages/Budgets';
import Newbudget from './pages/Newbudget';
import NotFound from './pages/NotFound';
import Dash from './pages/Dash';
import TableEdit from './pages/TableEdit';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Logon} />
        <Route path='/register' component={Register} />
        <Route path='/budgets' component={Budget} />
        <Route path='/newbudget' component={Newbudget} />
        <Route path='/termos' component={Eula} />
        <Route path='/dash' component={Dash} />
        <Route path='/table' component={TableEdit} />

        <Route path='/*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
};