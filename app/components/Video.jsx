import React, { PropTypes } from 'react';

const Video = ({ uri }) => (
  <video controls autoPlay src={uri} width="100%" />
);

Video.propTypes = {
  uri: PropTypes.string.isRequired,
};

export default Video;
