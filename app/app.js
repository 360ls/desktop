import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Navbar />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById("content"));
