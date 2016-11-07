import React, { PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';

const homeIcon = <FontIcon className="fa-home" />;
const liveIcon = <FontIcon className="fa-video-camera" />;
const settingIcon = <FontIcon className="fa-gear" />;
const dvrIcon = <FontIcon className="fa-play" />;

const menuItems = [
  {
    key: 0,
    route: '/dashboard',
    text: 'Dashboard',
    icon: homeIcon,
  },
  {
    key: 1,
    route: '/live',
    text: 'Live',
    icon: liveIcon,
  },
  { key: 2,
    route: '/dvr',
    text: 'DVR',
    icon: dvrIcon,
  },
  {
    key: 3,
    route: '/preference',
    text: 'Preferences',
    icon: settingIcon,
  },
];

const BottomNav = ({ index, onSelect }) => (
  <Paper zDepth={1}>
    <BottomNavigation selectedIndex={index}>
      {menuItems.map(menu =>
        <BottomNavigationItem
          key={menu.key}
          label={menu.text}
          icon={menu.icon}
          containerElement={<Link to={menu.route} />} // eslint-disable-line
          onTouchTap={() => onSelect(menu.key)}
        />
      )}
    </BottomNavigation>
  </Paper>
);

BottomNav.propTypes = {
  index: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default BottomNav;
