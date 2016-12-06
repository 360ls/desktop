import React from 'react';
import VideoPlayer from '../containers/VideoPlayer';
import VideoInfo from '../containers/VideoInfo';
import VideoNav from '../containers/VideoNav';

const LocalVideoPage = () => (
  <div>
    <VideoNav />
    <VideoPlayer />
    <VideoInfo />
  </div>
);

export default LocalVideoPage;
