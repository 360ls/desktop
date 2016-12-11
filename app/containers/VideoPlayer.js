import { connect } from 'react-redux';
import Video from '../components/Video';
import { getVideoURI } from '../reducers/player';

const mapStateToProps = state => ({
  uri: getVideoURI(state),
});

const VideoPlayer = connect(
  mapStateToProps,
  null
)(Video);

export default VideoPlayer;
