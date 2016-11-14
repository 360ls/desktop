import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const PreferenceField = ({ recordLoc, stitcherLoc }) => (
  <div>
    <TextField
      floatingLabelText="Stitcher Location"
      defaultValue={stitcherLoc}
    />
    <br />
    <TextField
      floatingLabelText="Local Video Storage Location"
      defaultValue={recordLoc}
    />
  </div>
);

PreferenceField.propTypes = {
  recordLoc: PropTypes.string.isRequired,
  stitcherLoc: PropTypes.string.isRequired,
};

export default PreferenceField;
