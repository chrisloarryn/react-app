import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Router, Route, Switch } from 'react-router-dom';
import SiteNavbar from './components/SiteNavbar';
import history from './history';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <SiteNavbar />
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/about/' component={About} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
