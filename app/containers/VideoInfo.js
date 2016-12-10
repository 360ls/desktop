import { connect } from 'react-redux';
import VideoInfoList from '../components/VideoInfoList';
import { getVideo } from '../reducers/player';
import * as actions from '../actions/videos';

const mapStateToProps = state => ({
  video: getVideo(state),
});

const VideoInfo = connect(
  mapStateToProps,
  actions
)(VideoInfoList);

export default VideoInfo;
