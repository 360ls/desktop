import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { green600 } from 'material-ui/styles/colors';

const StreamButton = ({ isBroadcasting, toggleBroadcast }) => {
  const startButton = (
    <RaisedButton
      label="Stream"
      labelColor="#F4F4EF"
      onClick={() => toggleBroadcast()}
      fullWidth
      buttonStyle={{
        height: 200,
        backgroundColor: green600,
      }}
    />
  );

  const stopButton = (
    <RaisedButton
      label="Stop"
      labelColor="#192333"
      backgroundColor="#D3D3D3"
      onClick={() => toggleBroadcast()}
      fullWidth
      buttonStyle={{
        height: 200,
      }}
    />
  );

  return (
    <div>
      {isBroadcasting ? stopButton : startButton}
    </div>
  );
};

StreamButton.propTypes = {
  isBroadcasting: PropTypes.bool.isRequired,
  toggleBroadcast: PropTypes.func.isRequired,
};

export default StreamButton;
