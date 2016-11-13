import { connect } from 'react-redux';
import UploadDialog from '../components/UploadDialog';
import { isReading, isUploading } from '../reducers/video';
import { requestVideo } from '../actions/video';

const mapStateToProps = state => ({
  isReading: isReading(state),
  isUploading: isUploading(state),
});

const mapDispatchToProps = dispatch => ({
  onClick(path) {
    dispatch(requestVideo(path));
  },
});

const Uploader = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadDialog);

export default Uploader;
