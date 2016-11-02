import React, { PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

const ToolBar = ({ activeFilter, onChange }) => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle
        text="Filter"
      />
      <DropDownMenu
        value={activeFilter}
        onChange={(e, index, val) => onChange(val)}
      >
        <MenuItem
          value={'All'}
          primaryText="All"
        />
        <MenuItem
          value={'Uploaded'}
          primaryText="Uploaded"
        />
        <MenuItem
          value={'Flagged'}
          primaryText="Flagged"
        />
      </DropDownMenu>
    </ToolbarGroup>
  </Toolbar>
);

ToolBar.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ToolBar;
