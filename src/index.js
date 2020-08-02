import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegisterVideo from './pages/register/video';
import RegisterCategory from './pages/register/category';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/register/video" component={RegisterVideo} />
      <Route path="/register/category" component={RegisterCategory} />
      <Route component={() => (<div>Error 404 - Page not found</div>)} />    
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
