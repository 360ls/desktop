import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class FetchErrorDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Retry"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.onRetry}
      />,
    ];

    return (
      <Dialog
        title="Request Error"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
        {this.props.message}
      </Dialog>
    );
  }
}

FetchErrorDialog.propTypes = {
  onRetry: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};
