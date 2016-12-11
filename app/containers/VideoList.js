import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { withRouter } from 'react-router';
import FetchErrorDialog from '../components/FetchErrorDialog';
import VideoTable from '../components/VideoTable';
import * as actions from '../actions/videos';
import {
  getErrorMessage,
  getIsFetching,
  getVisibleVideos,
} from '../reducers/videos';

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
      errorMessage,
      isFetching,
      location,
      router,
      videos,
      switchVideoTo,
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
            <CircularProgress
              color={'#FAFAFA'}
              size={80}
              thickness={5}
            />
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
  errorMessage: PropTypes.string,
  filter: PropTypes.oneOf(['All', 'Uploaded', 'Flagged']).isRequired,
  isFetching: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
  videos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.location,
    date: PropTypes.date,
    flagged: PropTypes.bool,
  })),
  fetchVideos: PropTypes.func.isRequired,
  switchVideoTo: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { router }) => {
  const filter = state.visibilityFilter;
  return {
    errorMessage: getErrorMessage(state, filter),
    filter,
    videos: getVisibleVideos(state, state.visibilityFilter),
    isFetching: getIsFetching(state, filter),
    router,
  };
};

VideoList = withRouter(connect( // eslint-disable-line no-class-assign
  mapStateToProps,
  actions
)(VideoList));

export default VideoList;
