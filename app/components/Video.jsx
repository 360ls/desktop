import React, { PropTypes } from 'react';
import ReactPlayer from 'react-player';

const Video = ({ uri }) => (
  <ReactPlayer
    url={uri}
    width={'100%'}
  />
);

Video.propTypes = {
  uri: PropTypes.string.isRequired,
};

export default Video;
