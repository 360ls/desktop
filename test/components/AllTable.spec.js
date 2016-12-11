import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AllTable from '../../app/components/AllTable';

const videos = [{
  id: '0',
  name: 'foo',
  location: 'foo',
  date: 'foo',
}];
const selectedIds = [];
const selectedVideos = [];

describe('components', () => {
  describe('AllTable', () => {
    it('should have a table of videos', () => {
      const onDelete = sinon.spy();
      const onSelect = sinon.spy();
      const wrapper = mount(
        <MuiThemeProvider>
          <AllTable
            videos={videos}
            selectedIds={selectedIds}
            selectedVideos={selectedVideos}
            onDelete={onDelete}
            onSelect={onSelect}
          />
        </MuiThemeProvider>
      );

      expect(wrapper.find('tr').length).to.equal(2);
    });

    it('should have a button for delete', () => {
      const onDelete = sinon.spy();
      const onSelect = sinon.spy();

      const wrapper = mount(
        <MuiThemeProvider>
          <AllTable
            videos={videos}
            selectedIds={selectedIds}
            selectedVideos={selectedVideos}
            onDelete={onDelete}
            onSelect={onSelect}
          />
        </MuiThemeProvider>
      );

      expect(wrapper.find('button').length).to.equal(1);
    });

    it('should handle delete click', () => {
      const onDelete = sinon.spy();
      const onSelect = sinon.spy();

      const wrapper = mount(
        <MuiThemeProvider>
          <AllTable
            videos={videos}
            selectedIds={selectedIds}
            selectedVideos={selectedVideos}
            onDelete={onDelete}
            onSelect={onSelect}
          />
        </MuiThemeProvider>
      );

      wrapper.find('button').simulate('click');
      expect(onDelete.calledOnce).to.equal(true);
    });
  });
});
