import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import VideoTable from '../components/VideoTable';
import * as actions from '../actions/videos';
import { getVisibleVideos } from '../reducers/videos';

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
    const { switchVideoTo, ...rest } = this.props;
    return (
      <VideoTable
        {...rest}
        onClick={switchVideoTo}
      />
    );
  }
}

VideoList.propTypes = {
  filter: PropTypes.oneOf(['All', 'Uploaded', 'Flagged']).isRequired,
  fetchVideos: PropTypes.func.isRequired,
  switchVideoTo: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const filter = state.visibilityFilter;
  return {
    videos: getVisibleVideos(state, state.visibilityFilter),
    filter,
  };
};

VideoList = connect(
  mapStateToProps,
  actions
)(VideoList);

export default VideoList;
