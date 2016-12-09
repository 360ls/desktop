import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { withRouter } from 'react-router';
import AllTable from '../components/AllTable';
import FetchErrorDialog from '../components/FetchErrorDialog';
import * as actions from '../actions/videos';
import { getVisibleVideos, getIsFetching, getErrorMessage, getSelectedVideos } from '../reducers/videos';

const filter = 'All';

class AllVideoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.videos.length !== prevProps.videos.length) {
      this.fetchData();
    }
  }

  fetchData() {
    const { fetchVideos } = this.props;
    fetchVideos(filter);
  }

  render() {
    const {
      isFetching,
      videos,
      errorMessage,
      deleteVideos,
      selectedVideos,
      selectVideo,
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
      <AllTable
        videos={videos}
        onDelete={deleteVideos}
        selectedIds={selectedVideos.map((video) => video.id)}
        selectedVideos={selectedVideos}
        onSelect={selectVideo}
      />
    );
  }
}

AllVideoList.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
  videos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.location,
    date: PropTypes.date,
    flagged: PropTypes.bool,
  })),
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  deleteVideos: PropTypes.func.isRequired,
  selectedVideos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.location,
    date: PropTypes.date,
    flagged: PropTypes.bool,
  })).isRequired,
  selectVideo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isFetching: getIsFetching(state, filter),
  videos: getVisibleVideos(state, filter),
  errorMessage: getErrorMessage(state, filter),
  selectedVideos: getSelectedVideos(state),
});

AllVideoList = withRouter(connect( // eslint-disable-line no-class-assign
  mapStateToProps,
  actions
)(AllVideoList));

export default AllVideoList;
