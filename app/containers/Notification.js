import { connect } from 'react-redux';
import NotificationBar from '../components/NotificationBar';
import {
  isConverting,
  isConverted,
  isIdle,
  isUploading,
  isUploaded,
} from '../reducers/video';

const mapStateToProps = state => ({
  isConverting: isConverting(state),
  isConverted: isConverted(state),
  isIdle: isIdle(state),
  isUploading: isUploading(state),
  isUploaded: isUploaded(state),
});

const Notification = connect(
  mapStateToProps,
  null
)(NotificationBar);

export default Notification;
