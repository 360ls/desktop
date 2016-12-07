import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';

import { grey50 } from 'material-ui/styles/colors';


const VideoInfoList = ({ video, toggleVideo }) => (
  <List
    style={{
      backgroundColor: grey50,
    }}
  >
    <Subheader>General</Subheader>
    <ListItem
      primaryText="Title"
      secondaryText={video.name}
    />
    <ListItem
      primaryText="Location"
      secondaryText={video.location}
    />
    <ListItem
      primaryText="Date"
      secondaryText={video.date}
    />
    <ListItem
      primaryText="Flagged"
      rightToggle={<Toggle toggled={video.flagged} onToggle={() => toggleVideo(video)} />}
    />
  </List>
);

VideoInfoList.propTypes = {
  video: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.location,
    date: PropTypes.date,
    flagged: PropTypes.bool,
  }),
  toggleVideo: PropTypes.func.isRequired,
};

export default VideoInfoList;
