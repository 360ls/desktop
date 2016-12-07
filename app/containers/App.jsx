import React from 'react';
import { grey50 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavigationBar from './NavigationBar';

injectTapEventPlugin();

const darkBlue = '#192333';
const lightGrey = '#ACBEBE';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: darkBlue,
    accent1Color: lightGrey,
    canvasColor: grey50,
  },
  appBar: {
    height: 50,
  },
  drawer: {
    color: grey50,
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
