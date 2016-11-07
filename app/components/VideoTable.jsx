import React, { PropTypes } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn } from 'material-ui/Table';
import Done from 'material-ui/svg-icons/action/done';
import Close from 'material-ui/svg-icons/navigation/close';
import Error from 'material-ui/svg-icons/alert/error';
import { red500, green500, yellow500 } from 'material-ui/styles/colors';

const rowHeader = [
  'Name',
  'Location',
  'Date',
  'Upload Status',
  'Flag',
];

const flagIcon = <Error color={yellow500} />;
const checkIcon = <Done color={green500} />;
const closeIcon = <Close color={red500} />;

const VideoTable = ({ videos, onClick, router, path }) => (
  <Table
    onRowSelection={rows => {
      onClick(videos[rows[0]].uri, videos[rows[0]].id);
      router.push(`${path}/${videos[rows[0]].id}`);
    }}
  >
    <TableHeader>
      <TableRow>
        {rowHeader.map(title =>
          <TableHeaderColumn key={title}>
            {title}
          </TableHeaderColumn>
        )}
      </TableRow>
    </TableHeader>
    <TableBody>
      {videos.map(video =>
        <TableRow
          key={video.id}
        >
          <TableRowColumn>{video.name}</TableRowColumn>
          <TableRowColumn>{video.location}</TableRowColumn>
          <TableRowColumn>{video.date}</TableRowColumn>
          <TableRowColumn>{video.uploaded ? checkIcon : closeIcon}</TableRowColumn>
          <TableRowColumn>{video.flagged ? flagIcon : <div />}</TableRowColumn>
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
    uploaded: PropTypes.bool.isRequired,
    flagged: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default VideoTable;
