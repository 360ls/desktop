import { connect } from 'react-redux';
import NotificationBar from '../components/NotificationBar';
import {
  isConverting,
  isConverted,
  isUploading,
  isUploaded,
  isIdle,
} from '../reducers/video';

const mapStateToProps = state => ({
  isUploading: isUploading(state),
  isUploaded: isUploaded(state),
  isIdle: isIdle(state),
  isConverting: isConverting(state),
  isConverted: isConverted(state),
});

const Notification = connect(
  mapStateToProps,
  null
)(NotificationBar);

export default Notification;
