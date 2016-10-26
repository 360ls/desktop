import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle(event) {
    console.log("tapped");
    console.log(this.state);
    this.setState({
      open: !this.state.open
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  render() {
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
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Dashboard</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Live</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>DVR</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Local Videos</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Preferences</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Navbar;
