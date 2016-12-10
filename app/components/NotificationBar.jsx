import React, { PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';

const duration = 45000;

const NotificationBar = ({
  isUploading,
  isUploaded,
  isConverting,
  isConverted,
}) => {
  const uploadNotifier = (
    <Snackbar
      open={isUploading}
      message="Uploading recorded video..."
      autoHideDuration={duration}
    />
  );

  const uploadDoneNotifier = (
    <Snackbar
      open={isUploaded}
      message="Upload successful!"
      autoHideDuration={duration}
    />
  );

  const readingNotifer = (
    <Snackbar
      open={isConverting}
      message="Processing recorded video..."
      autoHideDuration={duration}
    />
  );

  const readingDoneNotifier = (
    <Snackbar
      open={isConverted}
      message="Successfuly processed recorded video!"
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
  isConverting: PropTypes.bool.isRequired,
  isConverted: PropTypes.bool.isRequired,
  isUploading: PropTypes.bool.isRequired,
  isUploaded: PropTypes.bool.isRequired,
};

export default NotificationBar;
