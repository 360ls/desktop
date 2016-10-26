import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle(event) {
    this.setState({
      open: !this.state.open
    });
  }

  handleClose(route, e) {
    this.setState({
      open: false
    });
  }

  render() {
    const menuItems = [
      {
        "key": 0,
        "route": "/dashboard",
        "text": "Dashboard"
      },
      {
        "key": 1,
        "route": "/live",
        "text": "Live"
      },
      {
        "key": 2,
        "route": "/dvr",
        "text": "DVR"
      },
      {
        "key": 3,
        "route": "/local",
        "text": "Local Videos"
      },
      {
        "key": 4,
        "route": "/preference",
        "text": "Preferences"
      }
    ];
    return (
      <div>
        <AppBar 
          title="360ls"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          {menuItems.map((menu, index) => {
            return (
              <MenuItem
                onTouchTap={this.handleClose.bind(this, menu.route)}
                containerElement={<Link to={menu.route}/>}>
                {menu.text}
              </MenuItem>
            );
          })}
        </Drawer>
      </div>
    );
  }
}

export default Navbar;
