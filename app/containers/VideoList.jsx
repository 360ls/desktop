import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import VideoTable from '../components/VideoTable';
import * as actions from '../actions/videos';
import { getVisibleVideos, getIsFetching } from '../reducers/videos';

class VideoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchVideos } = this.props;
    fetchVideos(filter);
  }

  render() {
    const { switchVideoTo, isFetching, videos } = this.props;
    if (isFetching && !videos.length) {
      return (
        <div
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div>
            <CircularProgress size={60} thickness={7} />
          </div>
        </div>
      );
    }

    return (
      <VideoTable
        videos={videos}
        onClick={switchVideoTo}
      />
    );
  }
}

VideoList.propTypes = {
  filter: PropTypes.oneOf(['All', 'Uploaded', 'Flagged']).isRequired,
  fetchVideos: PropTypes.func.isRequired,
  switchVideoTo: PropTypes.func.isRequired,
  videos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  requestVideos: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const filter = state.visibilityFilter;
  return {
    isFetching: getIsFetching(state, filter),
    videos: getVisibleVideos(state, state.visibilityFilter),
    filter,
  };
};

VideoList = connect(
  mapStateToProps,
  actions
)(VideoList);

export default VideoList;
