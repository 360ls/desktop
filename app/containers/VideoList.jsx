import { connect } from 'react-redux';
import VideoTable from '../components/VideoTable';
import { switchVideo } from '../actions/videos';

const mapStateToProps = state => ({
  videos: state.videos,
});

const mapDispatchToProps = dispatch => ({
  onClick(uri) {
    dispatch(switchVideo(uri));
  },
});

const VideoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoTable);

export default VideoList;
