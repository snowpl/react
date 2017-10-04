import React from 'react'
import {Route, IndexRoute} form 'react-router'
import HomePage from './nightMode.js';

const routes = (
  <Route path="/" component={HomePage}>
    <IndexRoute component={HomePage}/>
  </Route>
);

export default routes;
