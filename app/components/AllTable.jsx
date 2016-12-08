import React, { PropTypes } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn } from 'material-ui/Table';
import { grey50 } from 'material-ui/styles/colors';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

const lightGrey = '#ACBEBE';

const rowHeader = [
  'Name',
  'Location',
  'Date',
];

const AllTable = ({ videos, onDelete, selectedIds, onSelect }) => (
  <div>
    <Toolbar
      style={{
        backgroundColor: lightGrey,
      }}
    >
      <ToolbarGroup>
        <RaisedButton
          label="Delete"
          primary
          onClick={() => {
            onDelete(selectedIds);
          }}
        />
      </ToolbarGroup>
    </Toolbar>
    <Table
      style={{
        backgroundColor: grey50,
      }}
      multiSelectable
      onRowSelection={rows => {
        const ids = rows.map((row) => videos[row].id);
        onSelect(ids);
      }}
    >
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          {rowHeader.map(title =>
            <TableHeaderColumn key={title}>
              {title}
            </TableHeaderColumn>
          )}
        </TableRow>
      </TableHeader>
      <TableBody
        stripedRows
        showRowHover
        displayRowCheckbox
        deselectOnClickaway={false}
      >
        {videos.map(video =>
          <TableRow
            key={video.id}
            selected={selectedIds.includes(video.id)}
          >
            <TableRowColumn>{video.name}</TableRowColumn>
            <TableRowColumn>{video.location}</TableRowColumn>
            <TableRowColumn>{video.date}</TableRowColumn>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
);

AllTable.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onDelete: PropTypes.func.isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default AllTable;
