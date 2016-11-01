import React from 'react';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import FilterBar from './FilterBar';

export default function DVRScreen() {
  return (
    <div>
      <FilterBar />
      <VideoPlayer />
      <VideoList />
    </div>
  );
}
