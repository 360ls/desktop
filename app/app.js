import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import VideoList from './components/video-list';

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <VideoList />
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById("content"));
