import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import BaseLayout from './components/BaseLayout';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Home from './components/Home';
import SplashPage from './components/SplashPage';
import Contact from './components/Contact';
import References from './components/References';



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={SplashPage}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/references" component={References}/>
        <Route path="/about" component={About}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
registerServiceWorker();
