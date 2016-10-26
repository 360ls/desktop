import React from 'react';
import VideoList from '../components/VideoList';

export default function DVRScreen() {
  return (
    <div>
      <video controls autoPlay src="storage/local1.mp4" width="100%" />
      <VideoList />
    </div>
  );
}
