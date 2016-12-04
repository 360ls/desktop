import { connect } from 'react-redux';
import NotificationBar from '../components/NotificationBar';
import {
  isUploading,
  isUploaded,
  isReading,
  isRead,
  isIdle,
} from '../reducers/video';

const mapStateToProps = state => ({
  isUploading: isUploading(state),
  isUploaded: isUploaded(state),
  isReading: isReading(state),
  isRead: isRead(state),
  isIdle: isIdle(state),
});

const Notification = connect(
  mapStateToProps,
  null
)(NotificationBar);

export default Notification;
