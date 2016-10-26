import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'; 
import FontIcon from 'material-ui/FontIcon';

export default class VideoList extends React.Component {
  constructor(props) {
    super(props);

    const rowHeader = [
      "Name",
      "Location",
      "Date",
      "Upload Status",
      "Flag"
    ]

    const rowData = [
      {
        "name": "Video 1",
        "location": "Chapel Hill, NC",
        "date": "10/1/2016",
        "status": false,
        "flag": true
      },
      {
        "name": "Video 2",
        "location": "Durham, NC",
        "date": "10/2/2016",
        "status": true,
        "flag": false
      },
      {
        "name": "Video 3",
        "location": "Raleigh, NC",
        "date": "10/3/2016",
        "status": false,
        "flag": true
      }
    ]

    this.state = {
      header: rowHeader,
      data: rowData
    };
  }


  render() {
    const flagIcon = <FontIcon className="fa-flag"/>;
    const checkIcon = <FontIcon className="fa-check"/>;
    const closeIcon = <FontIcon className="fa-close"/>;

    return (
      <Table>
        <TableHeader>
          <TableRow>
            {this.state.header.map((title, index) => {
              return (
                <TableHeaderColumn>{title}</TableHeaderColumn>
              );
            })} 
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.state.data.map((row, index) => {
            return (
              <TableRow>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.location}</TableRowColumn>
                <TableRowColumn>{row.date}</TableRowColumn>
                <TableRowColumn>{row.status ? checkIcon : closeIcon}</TableRowColumn>
                <TableRowColumn>{row.flag ? flagIcon : <div></div>}</TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}
