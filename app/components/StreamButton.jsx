import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const StreamButton = ({ toggleBroadcast, isBroadcasting }) => {
  const startButton = (
    <RaisedButton
      label="Stream"
      primary
      fullWidth
      onClick={() => toggleBroadcast()}
    />
  );

  const stopButton = (
    <RaisedButton
      label="Stop"
      secondary
      fullWidth
      onClick={() => toggleBroadcast()}
    />
  );

  return (
    <div>
      {isBroadcasting ? stopButton : startButton}
    </div>
  );
};

StreamButton.propTypes = {
  toggleBroadcast: PropTypes.func.isRequired,
  isBroadcasting: PropTypes.bool.isRequired,
};

export default StreamButton;
