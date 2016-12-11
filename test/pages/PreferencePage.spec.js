import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PreferencePage from '../../app/pages/PreferencePage';
import configureStore from '../../app/store/configureStore';

function setup(initialState) {
  const store = configureStore(initialState);
  const app = mount(
    <Provider store={store}>
      <MuiThemeProvider>
        <PreferencePage />
      </MuiThemeProvider>
    </Provider>
  );

  return app;
}

describe('pages', () => {
  describe('PreferencePage', () => {
    it('should have input fields', () => {
      const app = setup();
      const fields = app.find('input');
      expect(fields.length).to.equal(6);
    });
  });
});
