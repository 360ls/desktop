import { connect } from 'react-redux';
import VideoTable from '../components/VideoTable';

const mapStateToProps = state => ({
  videos: state.videos,
});

const VideoList = connect(
  mapStateToProps,
  null
)(VideoTable);

export default VideoList;
