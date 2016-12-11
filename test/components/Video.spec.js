import React from 'react';
import { mount } from 'enzyme';
import Video from '../../app/components/Video';

describe('components', () => {
  describe('Video', () => {
    it('should render a video component', () => {
      const wrapper = mount(
        <Video uri={'foo'} />
      );

      expect(wrapper.find('video').length).toBe(1);
    });
  });
});
