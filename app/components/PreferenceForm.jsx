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
      recordingLoc: props.recordLoc,
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
        <DropDownMenu value={this.state.previewIndex} onChange={this.handleDropdownChange}>
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
        <RaisedButton
          label="Preview"
          secondary
          onClick={() => {
            this.props.onPreview();
          }}
        />
        <RaisedButton
          label="Apply"
          primary
          onClick={() => {
            this.props.onSave(
              this.state.cameraIndex,
              this.state.sndCameraIndex,
              this.state.previewIndex,
              this.state.stitcherLoc,
              this.state.recordingLoc);
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
  recordLoc: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired,
};
