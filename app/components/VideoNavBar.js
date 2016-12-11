import React, { PropTypes } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

const lightGrey = '#ACBEBE';

const VideoNavBar = ({ router, location }) => (
  <Toolbar
    style={{
      backgroundColor: lightGrey,
    }}
  >
    <ToolbarGroup>
      <RaisedButton
        label="Back"
        primary
        onClick={() => {
          const currPath = location.pathname;
          router.push(currPath.slice(0, currPath.lastIndexOf('/')));
        }}
      />
    </ToolbarGroup>
  </Toolbar>
);

VideoNavBar.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default VideoNavBar;
