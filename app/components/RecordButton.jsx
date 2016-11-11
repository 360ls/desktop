import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const RecordButton = ({ toggleStream, isStreaming }) => {
  const startButton = (
    <RaisedButton
      label="Record"
      primary
      fullWidth
      onClick={() => toggleStream()}
    />
  );

  const stopButton = (
    <RaisedButton
      label="Stop"
      secondary
      fullWidth
      onClick={() => toggleStream()}
    />
  );

  return (
    <div>
      {isStreaming ? stopButton : startButton}
    </div>
  );
};

RecordButton.propTypes = {
  toggleStream: PropTypes.func.isRequired,
};

export default RecordButton;
