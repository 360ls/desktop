import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      open: false,
    };
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
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
        route: '/local',
        text: 'Local Videos',
      },
      {
        key: 4,
        route: '/preference',
        text: 'Preferences',
      },
    ];
    return (
      <div>
        <AppBar
          title="360ls"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          {menuItems.map(menu =>
            <MenuItem
              onTouchTap={this.handleClose}
              containerElement={<Link to={menu.route} />} // eslint-disable-line
            >
              {menu.text}
            </MenuItem>
         )}
        </Drawer>
      </div>
    );
  }
}

export default Navbar;
