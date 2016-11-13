import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

const UploadDialog = ({ onClick, isReading, isUploading }) => {
  const file = 'storage/local1.mp4';
  if (isReading || isUploading) {
    return (
      <div>
        <CircularProgress size={80} thickness={5} />
      </div>
    );
  }
  return (
    <div>
      <RaisedButton
        label="Upload"
        primary
        onClick={() => onClick(file)}
      />
    </div>
  );
};

UploadDialog.propTypes = {
  onClick: PropTypes.func.isRequired,
  isReading: PropTypes.bool.isRequired,
  isUploading: PropTypes.bool.isRequired,
};

export default UploadDialog;
