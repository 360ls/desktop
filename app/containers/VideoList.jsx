import { connect } from 'react-redux';
import VideoTable from '../components/VideoTable';
import { switchVideo } from '../actions/videos';

const getVisibleVideos = (videos, filter) => {
  switch (filter) {
    case 'All':
      return videos;
    case 'Uploaded':
      return videos.filter(video => video.status);
    case 'Flagged':
      return videos.filter(video => video.flag);
    default:
      return videos;
  }
};

const mapStateToProps = state => ({
  videos: getVisibleVideos(state.videos, state.visibilityFilter),
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
