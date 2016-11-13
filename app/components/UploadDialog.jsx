import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

const UploadDialog = ({ onClick, isReading, isUploading }) => {
  const file = 'dist/foo.txt';
  if (isReading || isUploading) {
    return (
      <div>
        <CircularProgress size={80} thickness={5} />
      </div>
    );
  }
  return (
    <div>
      <RaisedButton onClick={onClick(file)} />
    </div>
  );
};

UploadDialog.propTypes = {
  onClick: PropTypes.func.isRequired,
  isReading: PropTypes.bool.isRequired,
  isUploading: PropTypes.bool.isRequired,
};

export default UploadDialog;
