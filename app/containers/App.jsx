import React from 'react';
import { grey50 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavigationBar from './NavigationBar';
import { fade, lighten } from 'material-ui/utils/colorManipulator';

injectTapEventPlugin();

const darkBlue = '#192333';
const lightGrey = '#ACBEBE';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: darkBlue,
    accent1Color: lightGrey,
    canvasColor: grey50,
    textColor: darkBlue,
    alternateTextColor: grey50,
  },
  appBar: {
    height: 50,
  },
  drawer: {
    color: grey50,
  },
  tableRow: {
    hoverColor: lightGrey,
    stripeColor: fade(lighten(lightGrey, 0.5), 0.5),
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
