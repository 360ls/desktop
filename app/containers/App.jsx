import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navbar from '../components/Navbar';

injectTapEventPlugin();

export default function App(props) {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        {props.children}
      </div>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};
