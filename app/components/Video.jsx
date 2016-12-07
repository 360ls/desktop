import React, { PropTypes } from 'react';

const convertUrl = (url) =>
  `${url.slice(0, -1)}1`;

const Video = ({ uri }) => (
  <video
    controls
    autoPlay
    src={convertUrl(uri)}
    width={'100%'}
    type={'video/mp4'}
  />
);

Video.propTypes = {
  uri: PropTypes.string.isRequired,
};

export default Video;
