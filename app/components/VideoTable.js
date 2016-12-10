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
import Flag from 'material-ui/svg-icons/content/flag';
import { red500, green500, grey50 } from 'material-ui/styles/colors';

const rowHeader = [
  'Name',
  'Location',
  'Date',
  'Upload Status',
  'Flag',
];

const darkRed = '#A01D27';

const flagIcon = <Flag color={darkRed} />;
const checkIcon = <Done color={green500} />;
const closeIcon = <Close color={red500} />;

const sortVideos = (videos) =>
  videos.concat().sort((a, b) =>
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

const getSortedVideos = (videos) =>
  sortVideos(videos);

const VideoTable = ({ videos, path, router, onClick }) => (
  <Table
    onRowSelection={rows => {
      const index = rows[0];
      onClick(getSortedVideos(videos)[index].uri, getSortedVideos(videos)[index].id);
      router.push(`${path}/${videos[index].id}`);
    }}
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
      displayRowCheckbox={false}
    >
      {getSortedVideos(videos).map(video =>
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
  path: PropTypes.string.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
  onClick: PropTypes.func.isRequired,
};

export default VideoTable;
