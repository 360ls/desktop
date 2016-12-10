import React from 'react';
import VideoPlayer from '../containers/VideoPlayer';
import VideoInfo from '../containers/VideoInfo';
import VideoNav from '../containers/VideoNav';
import VideoList from '../containers/VideoList';


const LocalVideoPage = () => (
  <div>
    <VideoNav />
    <VideoPlayer />
    <div id="local-video-info">
      <VideoInfo />
    </div>
    <div id="video-list-container" className="jumbotron">
      <h3 className="text-center"> More Videos </h3>
      <VideoList />
    </div>
  </div>
);

export default LocalVideoPage;
