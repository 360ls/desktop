import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

const menuItems = [
  {
    key: 0,
    route: '/dashboard',
    text: 'Dashboard',
  },
  {
    key: 1,
    route: '/live',
    text: 'Live',
  },
  { key: 2,
    route: '/dvr',
    text: 'DVR',
  },
  {
    key: 3,
    route: '/preference',
    text: 'Preferences',
  },
];

const Navbar = ({ open, onToggle, onChange, onClose }) => (
  <div>
    <AppBar
      title="360 Life Stream"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={onToggle}
    />
    <Drawer
      docked={false}
      width={200}
      open={open}
      onRequestChange={onChange}
    >
      {menuItems.map(menu =>
        <MenuItem
          key={menu.key}
          onTouchTap={onClose}
          containerElement={<Link to={menu.route} />} // eslint-disable-line
        >
          {menu.text}
        </MenuItem>
        )}
    </Drawer>
  </div>
);

Navbar.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Navbar;
