import React from 'react';
import { lightBlueA200 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavigationBar from './NavigationBar';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlueA200,
  },
  appBar: {
    height: 50,
  },
});

const App = ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <NavigationBar />
      {children}
    </div>
  </MuiThemeProvider>
);

export default App;

App.propTypes = {
  children: React.PropTypes.element,
};
