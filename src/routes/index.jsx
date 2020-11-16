import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home/index';
import Appointments from '../pages/appointments/index';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/agendamentos" component={Appointments} />
    </Switch>
  );
};

export default Routes;
