import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LivePage from '../../app/pages/LivePage';
import configureStore from '../../app/store/configureStore';

function setup(initialState) {
  const store = configureStore(initialState);
  const app = mount(
    <Provider store={store}>
      <MuiThemeProvider>
        <LivePage />
      </MuiThemeProvider>
    </Provider>
  );

  return app;
}

const headerText = 'This portion of the application would typically show a view'
  + ' of the live video inside the car. But, at the moment, our live'
  + ' preview only works outside of the Electron application.';

describe('pages', () => {
  describe('LivePage', () => {
    it('should have a header text', () => {
      const app = setup();
      expect(app.find('h2').text())
        .to.equal(headerText);
    });

    it('should have control buttons', () => {
      const app = setup();
      const buttons = app.find('button');
      expect(buttons.length).to.equal(3);
    });
  });
});
