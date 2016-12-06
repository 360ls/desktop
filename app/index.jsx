import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import {
  handleChange,
  handlePreviewChange,
  handleBroadcastChange,
  setupIPCHandler,
} from './services/ipc';

const store = configureStore();

store.subscribe(handleChange(store));
store.subscribe(handlePreviewChange(store));
store.subscribe(handleBroadcastChange(store));

const history = syncHistoryWithStore(hashHistory, store);

setupIPCHandler(store);

render((
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
), document.getElementById('content'));
