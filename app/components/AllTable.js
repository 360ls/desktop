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

const AllTable = ({
  videos,
  selectedIds,
  selectedVideos,
  onDelete,
  onSelect }) => (
    <div>
      <Toolbar
        style={{
          backgroundColor: lightGrey,
        }}
      >
        <ToolbarGroup
          firstChild
        >
          <RaisedButton
            label="Delete"
            backgroundColor={'#FF1744'}
            onClick={() => {
              onDelete(selectedVideos);
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
  selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedVideos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onDelete: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default AllTable;
