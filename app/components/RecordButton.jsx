import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const RecordButton = ({ toggleStream }) => (
  <div>
    <RaisedButton
      label="Record"
      primary
      fullWidth
      onClick={() => toggleStream()}
    />
  </div>
);

RecordButton.propTypes = {
  toggleStream: PropTypes.func.isRequired,
};

export default RecordButton;
