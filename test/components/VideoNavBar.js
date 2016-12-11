import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VideoNavBar from '../../app/components/VideoNavBar';

const location = {
  pathname: '/foo',
};

describe('components', () => {
  describe('VideoTable', () => {
    it('should have a button for back', () => {
      const push = sinon.spy();
      const router = {
        push,
      };

      const wrapper = mount(
        <MuiThemeProvider>
          <VideoNavBar
            router={router}
            location={location}
          />
        </MuiThemeProvider>
      );

      expect(wrapper.find('button').length).to.equal(1);
    });

    it('should handle delete click', () => {
      const push = sinon.spy();
      const router = {
        push,
      };

      const wrapper = mount(
        <MuiThemeProvider>
          <VideoNavBar
            router={router}
            location={location}
          />
        </MuiThemeProvider>
      );

      wrapper.find('button').simulate('click');
      expect(push.calledOnce).to.equal(true);
    });
  });
});
