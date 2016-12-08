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

const AllTable = ({ videos }) => (
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
        />
      </ToolbarGroup>
    </Toolbar>
    <Table
      style={{
        backgroundColor: grey50,
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
      >
        {videos.map(video =>
          <TableRow
            key={video.id}
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
};

export default AllTable;
