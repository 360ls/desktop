import { connect } from 'react-redux';
import NotificationBar from '../components/NotificationBar';
import { isUploading } from '../reducers/video';

const mapStateToProps = state => ({
  isUploading: isUploading(state),
});

const Notification = connect(
  mapStateToProps,
  null
)(NotificationBar);

export default Notification;
