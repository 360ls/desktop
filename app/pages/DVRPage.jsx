import React from 'react';
import VideoList from '../containers/VideoList';
import VideoPlayer from '../containers/VideoPlayer';
import FilterBar from '../containers/FilterBar';

const DVRPage = () => (
  <div>
    <FilterBar />
    <VideoPlayer />
    <VideoList />
  </div>
);

export default DVRPage;
