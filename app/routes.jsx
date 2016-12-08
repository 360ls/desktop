import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './containers/App';
import DashboardPage from './pages/DashboardPage';
import DVRPage from './pages/DVRPage';
import LivePage from './pages/LivePage';
import LocalPage from './pages/LocalVideoPage';
import PreferencePage from './pages/PreferencePage';
import AdminPage from './pages/AdminPage';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/dvr" />
    <Route path="dashboard" component={DashboardPage} />
    <Route path="dvr" component={DVRPage} />
    <Route path="dvr/(:video)" component={LocalPage} />
    <Route path="live" component={LivePage} />
    <Route path="preference" component={PreferencePage} />
    <Route path="admin" component={AdminPage} />
  </Route>
);
