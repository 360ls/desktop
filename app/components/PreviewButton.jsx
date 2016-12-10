import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const PreviewButton = ({ isPreviewing, togglePreview }) => {
  const startButton = (
    <RaisedButton
      label="Preview"
      labelColor="#192333"
      backgroundColor="#ACBEBE"
      onClick={() => togglePreview()}
      fullWidth
      labelStyle={{
        height: 200,
      }}
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
      onClick={() => togglePreview()}
      fullWidth
      buttonStyle={{
        height: 200,
      }}
    />
  );

  return (
    <div>
      {isPreviewing ? stopButton : startButton}
    </div>
  );
};

PreviewButton.propTypes = {
  isPreviewing: PropTypes.bool.isRequired,
  togglePreview: PropTypes.func.isRequired,
};

export default PreviewButton;
