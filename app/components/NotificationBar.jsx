import React, { PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';

const duration = 5000;

const NotificationBar = ({
  isUploading,
  isUploaded,
  isReading,
  isRead,
}) => {
  const uploadNotifier = (
    <Snackbar
      open={isUploading}
      message="Uploading recorded video"
      autoHideDuration={duration}
    />
  );

  const uploadDoneNotifier = (
    <Snackbar
      open={isUploaded}
      message="Upload successful"
      autoHideDuration={duration}
    />
  );

  const readingNotifer = (
    <Snackbar
      open={isReading}
      message="Processing recorded video"
      autoHideDuration={duration}
    />
  );

  const readingDoneNotifier = (
    <Snackbar
      open={isRead}
      message="Successfuly processed recorded video"
      autoHideDuration={duration}
    />
  );

  return (
    <div>
      {readingNotifer}
      {readingDoneNotifier}
      {uploadNotifier}
      {uploadDoneNotifier}
    </div>
  );
};

NotificationBar.propTypes = {
  isUploading: PropTypes.bool.isRequired,
  isUploaded: PropTypes.bool.isRequired,
  isReading: PropTypes.bool.isRequired,
  isRead: PropTypes.bool.isRequired,
};

export default NotificationBar;
