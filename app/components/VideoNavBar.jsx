import React, { PropTypes } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

const lightGrey = '#ACBEBE';

const VideoNavBar = ({ router, path }) => (
  <Toolbar
    style={{
      backgroundColor: lightGrey
    }}
  >
    <ToolbarGroup>
      <RaisedButton
        label="Back"
        primary
        onClick={() => {
          console.log(path);
        }}
      />
    </ToolbarGroup>
  </Toolbar>
);

VideoNavBar.propTypes = {
  router: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default VideoNavBar;
