import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import VideoTable from '../components/VideoTable';
import FetchErrorDialog from '../components/FetchErrorDialog';
import * as actions from '../actions/videos';
import { getVisibleVideos, getIsFetching, getErrorMessage } from '../reducers/videos';

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
    const { switchVideoTo, isFetching, videos, errorMessage } = this.props;
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

    if (errorMessage && !videos.length) {
      return (
        <FetchErrorDialog
          message={errorMessage}
          onRetry={() => this.fetchData()}
          open={true}
        />
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
  errorMessage: PropTypes.string,
};

const mapStateToProps = state => {
  const filter = state.visibilityFilter;
  return {
    isFetching: getIsFetching(state, filter),
    videos: getVisibleVideos(state, state.visibilityFilter),
    filter,
    errorMessage: getErrorMessage(state, filter),
  };
};

VideoList = connect(
  mapStateToProps,
  actions
)(VideoList);

export default VideoList;
