import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const RecordButton = ({ toggleStream, isStreaming }) => {
  const startButton = (
    <RaisedButton
      label="Record"
      labelColor='#F4F4EF'
      backgroundColor='#A01D27'
      onClick={() => toggleStream()}
      buttonStyle={{
        height: '200',
        width: '400'
      }}
    />
  );

  const stopButton = (
    <RaisedButton
      label="Stop"
      labelColor='#192333'
      backgroundColor='#ACBEBE'
      onClick={() => toggleStream()}
      buttonStyle={{
        height: '200',
        width: '400'
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
  toggleStream: PropTypes.func.isRequired,
};

export default RecordButton;
