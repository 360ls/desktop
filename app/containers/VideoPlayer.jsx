import { connect } from 'react-redux';
import Video from '../components/Video';

const mapStateToProps = state => ({
  uri: state.player.uri,
});

const VideoPlayer = connect(
  mapStateToProps,
  null
)(Video);

export default VideoPlayer;
