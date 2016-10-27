import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';
import App from './containers/App';
import DashboardScreen from './containers/DashboardScreen';
import DVRScreen from './containers/DVRScreen';
import LiveScreen from './containers/LiveScreen';
import LocalScreen from './containers/LocalScreen';
import PreferenceScreen from './containers/PreferenceScreen';

render((
  <Router history={hashHistory}>
    <Redirect from="/" to="dvr" />
    <Route path="/" component={App}>
      <Route path="dashboard" component={DashboardScreen} />
      <Route path="dvr" component={DVRScreen} />
      <Route path="live" component={LiveScreen} />
      <Route path="local" component={LocalScreen} />
      <Route path="preference" component={PreferenceScreen} />
    </Route>
  </Router>
), document.getElementById('content'));
