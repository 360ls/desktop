import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const RecordButton = ({ isStreaming, toggleStream }) => {
  const startButton = (
    <RaisedButton
      label="Record"
      labelColor="#F4F4EF"
      backgroundColor="#A01D27"
      onClick={() => toggleStream()}
      fullWidth
      buttonStyle={{
        height: 200,
      }}
    />
  );

  const stopButton = (
    <RaisedButton
      label="Stop"
      labelColor="#192333"
      backgroundColor="#D3D3D3"
      onClick={() => toggleStream()}
      fullWidth
      buttonStyle={{
        height: 200,
      }}
    />
  );

  return (
    <div>
      {isStreaming ? stopButton : startButton}
    </div>
  );
};

RecordButton.propTypes = {
  isStreaming: PropTypes.bool.isRequired,
  toggleStream: PropTypes.func.isRequired,
};

export default RecordButton;
