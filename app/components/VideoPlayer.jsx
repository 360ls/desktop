import React from 'react';
import { ReactPlayer } from 'react-player';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactPlayer
        url={this.props.url}
        playing
      />
    );
  }
}
