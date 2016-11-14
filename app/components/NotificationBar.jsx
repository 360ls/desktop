import React, { PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';

const NotificationBar = ({ isUploading }) => {
  const uploadNotifier = (
    <Snackbar
      open={isUploading}
      message="Uploading recorded video"
      autoHideDuration={4000}
    />
  );

  const doneNotifier = (
    <Snackbar
      open={!isUploading}
      message="Upload successful"
      autoHideDuration={4000}
    />
  );

  return (
    <div>
      {uploadNotifier}
      {doneNotifier}
    </div>
  );
};

NotificationBar.propTypes = {
  isUploading: PropTypes.bool.isRequired,
};

export default NotificationBar;
