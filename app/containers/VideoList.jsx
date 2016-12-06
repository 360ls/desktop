import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { withRouter } from 'react-router';
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
    const {
      switchVideoTo,
      isFetching,
      videos,
      errorMessage,
      router,
      location,
    } = this.props;
    if (isFetching && !videos.length) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              alignSelf: 'center',
              marginTop: '100px',
            }}
          >
            <CircularProgress size={80} thickness={5} />
          </div>
        </div>
      );
    }

    if (errorMessage && !videos.length) {
      return (
        <FetchErrorDialog
          message={errorMessage}
          onRetry={() => this.fetchData()}
          open
        />
      );
    }

    return (
      <VideoTable
        videos={videos}
        onClick={switchVideoTo}
        router={router}
        path={location.pathname}
      />
    );
  }
}

VideoList.propTypes = {
  filter: PropTypes.oneOf(['All', 'Uploaded', 'Flagged']).isRequired,
  fetchVideos: PropTypes.func.isRequired,
  switchVideoTo: PropTypes.func.isRequired,
  videos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.location,
    date: PropTypes.date,
    flagged: PropTypes.bool,
  })),
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

const mapStateToProps = (state, { router }) => {
  const filter = state.visibilityFilter;
  return {
    isFetching: getIsFetching(state, filter),
    videos: getVisibleVideos(state, state.visibilityFilter),
    filter,
    errorMessage: getErrorMessage(state, filter),
    router,
  };
};

VideoList = withRouter(connect( // eslint-disable-line no-class-assign
  mapStateToProps,
  actions
)(VideoList));

export default VideoList;
