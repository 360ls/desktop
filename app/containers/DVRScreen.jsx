import React from 'react';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

export default function DVRScreen() {
  return (
    <div>
      <VideoPlayer />
      <VideoList />
    </div>
  );
}
