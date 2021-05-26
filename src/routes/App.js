import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';


const App = () => (
  <BrowserRouter>
  
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />

  </BrowserRouter>
);

export default App;