import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import VideoList from '../components/VideoList';

injectTapEventPlugin();

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
