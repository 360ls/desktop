import React, { PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class PreferenceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraIndex: props.cameraIndex,
      sndCameraIndex: props.sndCameraIndex,
      previewIndex: props.previewIndex,
      stitcherLoc: props.stitcherLoc,
      recordingLoc: props.recordingLoc,
      streamUrl: props.streamUrl,
      width: props.width,
      height: props.height,
    };
  }

  handleDropdownChange = (event, index, value) => {
    this.setState({
      cameraIndex: value,
    });
  }

  handleSndDropdownChange = (event, index, value) => {
    this.setState({
      sndCameraIndex: value,
    });
  }

  handlePreviewDropdownChange = (event, index, value) => {
    this.setState({
      previewIndex: value,
    });
  }

  handleStitcherChange = (e) => {
    this.setState({
      stitcherLoc: e.target.value,
    });
  }

  handleRecordingChange = (e) => {
    this.setState({
      recordingLoc: e.target.value,
    });
  }

  handleUrlChange = (e) => {
    this.setState({
      streamUrl: e.target.value,
    });
  };

  handleWidthChange = (e) => {
    this.setState({
      width: e.target.value,
    });
  };

  handleHeightChange = (e) => {
    this.setState({
      height: e.target.value,
    });
  };

  render() {

    return (
      <div>
        <h4>First Camera Index</h4>
        <DropDownMenu value={this.state.cameraIndex} onChange={this.handleDropdownChange}>
          <MenuItem value={0} primaryText="0" />
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={3} primaryText="3" />
        </DropDownMenu>
        <br />
        <h4>Second Camera Index</h4>
        <DropDownMenu value={this.state.sndCameraIndex} onChange={this.handleSndDropdownChange}>
          <MenuItem value={0} primaryText="0" />
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={3} primaryText="3" />
        </DropDownMenu>
        <br />
        <h4>Preview Index</h4>
        <DropDownMenu value={this.state.previewIndex} onChange={this.handlePreviewDropdownChange}>
          <MenuItem value={0} primaryText="0" />
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={3} primaryText="3" />
        </DropDownMenu>
        <br />
        <TextField
          defaultValue={this.state.stitcherLoc}
          floatingLabelText="Stitcher Directory"
          onChange={this.handleStitcherChange}
        />
        <br />
        <TextField
          defaultValue={this.state.recordingLoc}
          floatingLabelText="Recording Directory"
          onChange={this.handleRecordingChange}
        />
        <br />
        <TextField
          defaultValue={this.state.streamUrl}
          floatingLabelText="RTMP Stream URL"
          onChange={this.handleUrlChange}
        />
        <br />
        <TextField
          defaultValue={this.state.width}
          floatingLabelText="Recording Width (px)"
          onChange={this.handleWidthChange}
        />
        <br />
        <TextField
          defaultValue={this.state.height}
          floatingLabelText="Recording Height (px)"
          onChange={this.handleHeightChange}
        />
        <br />
        <RaisedButton
          label="Apply"
          onClick={() => {
            this.props.savePreference(
              this.state.cameraIndex,
              this.state.sndCameraIndex,
              this.state.previewIndex,
              this.state.stitcherLoc,
              this.state.recordingLoc,
              this.state.streamUrl,
              this.state.width,
              this.state.height,
            );
          }}
          buttonStyle={{
            backgroundColor: '#ACBEBE',
            labelColor: '#192333'
          }}
        />
      </div>
    );
  }
}

export default PreferenceForm;

PreferenceForm.propTypes = {
  cameraIndex: PropTypes.number.isRequired,
  sndCameraIndex: PropTypes.number.isRequired,
  previewIndex: PropTypes.number.isRequired,
  stitcherLoc: PropTypes.string.isRequired,
  recordingLoc: PropTypes.string.isRequired,
  savePreference: PropTypes.func.isRequired,
  streamUrl: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
