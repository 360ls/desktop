import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import DashboardPage from './pages/DashboardPage';
import DVRPage from './pages/DVRPage';
import LivePage from './pages/LivePage';
import LocalPage from './pages/LocalVideoPage';
import PreferencePage from './pages/PreferencePage';

export default (
  <Route path="/" component={App}>
    <Route path="dashboard" component={DashboardPage} />
    <Route path="dvr" component={DVRPage} />
    <Route path="live" component={LivePage} />
    <Route path="local" component={LocalPage} />
    <Route path="preference" component={PreferencePage} />
  </Route>
);
