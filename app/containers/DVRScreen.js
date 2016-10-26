import React from 'react';
import VideoList from '../components/VideoList';

export default class DVRScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <video controls autoplay src="storage/local1.mp4" width="100%"></video>
        <VideoList />
      </div>
    );
  }
}
