import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

const ToolBar = () => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle
        text="Filter"
      />
      <DropDownMenu
        value={0}
      >
        <MenuItem
          value={0}
          primaryText="All"
        />
        <MenuItem
          value={1}
          primaryText="Uploaded"
        />
        <MenuItem
          value={2}
          primaryText="Flagged"
        />
      </DropDownMenu>
    </ToolbarGroup>
  </Toolbar>
);

export default ToolBar;
