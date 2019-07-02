import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import messageme from './messageme';
import Contact from './contact';
import portofolio from './portofolio';
import profile from './profile';



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/messageme" component={messageme} />
    <Route path="/contact" component={Contact} />
    <Route path="/portofolio" component={portofolio} />
    <Route path="/profile" component={profile} />
  </Switch>
)

export default Main;
