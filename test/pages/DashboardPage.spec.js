import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import DashboardPage from '../../app/pages/DashboardPage.jsx';

function setup() {
  const app = mount(
    <DashboardPage />
  );

  return app;
}

const headerText = 'Welcome to the 360 Life Stream Desktop Application.';
const subheaderText = 'This application is meant for police officers to use in their cars,'
  + ' and it provides the following functionality:';

describe('pages', () => {
  describe('DashboardPage', () => {
    it('should have a header text', () => {
      const app = setup();
      expect(app.find('h1').text())
        .to.equal(headerText);
    });

    it('should have a sub-header text', () => {
      const app = setup();
      expect(app.find('h2').text())
        .to.equal(subheaderText);
    });

    it('should have a list of feature text', () => {
      const app = setup();
      const list = app.find('ol');
      expect(list.children().length).to.equal(4);
      expect(list.childAt(0).text()).to.equal('Display of one camera feed locally.');
      expect(list.childAt(1).text()).to.equal('Recording of one camera feed locally with upload to server.');
      expect(list.childAt(2).text()).to.equal('Streaming from one camera feed to hosted Wowza web service for later consumption.');
      expect(list.childAt(3).text()).to.equal('DVR playback of videos saved on the server post-recording.');
    });
  });
});
