import React, { PropTypes } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn } from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';

const rowHeader = [
  'Name',
  'Location',
  'Date',
  'Upload Status',
  'Flag',
];
const flagIcon = <FontIcon className="fa-flag" />;
const checkIcon = <FontIcon className="fa-check" />;
const closeIcon = <FontIcon className="fa-close" />;

const VideoTable = ({ videos, onClick }) => (
  <Table
    onRowSelection={rows => onClick(videos[rows[0]].uri)}
  >
    <TableHeader>
      <TableRow>
        {rowHeader.map(title =>
          <TableHeaderColumn>{title}</TableHeaderColumn>
        )}
      </TableRow>
    </TableHeader>
    <TableBody>
      {videos.map(video =>
        <TableRow>
          <TableRowColumn>{video.name}</TableRowColumn>
          <TableRowColumn>{video.location}</TableRowColumn>
          <TableRowColumn>{video.date}</TableRowColumn>
          <TableRowColumn>{video.status ? checkIcon : closeIcon}</TableRowColumn>
          <TableRowColumn>{video.flag ? flagIcon : <div />}</TableRowColumn>
        </TableRow>
      )}
    </TableBody>
  </Table>
);

VideoTable.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    flag: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VideoTable;
