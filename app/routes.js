import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import DashboardScreen from './containers/DashboardScreen';
import DVRScreen from './containers/DVRScreen';
import LiveScreen from './containers/LiveScreen';
import LocalScreen from './containers/LocalScreen';
import PreferenceScreen from './containers/PreferenceScreen';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LiveScreen} />
    <Route path="/dashboard" component={DashboardScreen} />
    <Route path="/dvr" component={DVRScreen} />
    <Route path="/live" component={LiveScreen} />
    <Route path="/local" component={LocalScreen} />
    <Route path="/preference" component={PreferenceScreen} />
  </Route>
);
