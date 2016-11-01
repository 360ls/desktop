import React from 'react';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import ToolBar from '../components/ToolBar';

export default function DVRScreen() {
  return (
    <div>
      <ToolBar />
      <VideoPlayer />
      <VideoList />
    </div>
  );
}
