import { connect } from 'react-redux';
import PreferenceForm from '../components/PreferenceForm';
import {
  getRecordLocation,
  getStitcherLocation,
  getCameraIndex,
  getSndCameraIndex,
  getPreviewIndex,
  getStreamUrl,
} from '../reducers/preference';
import * as actions from '../actions/preference';

const mapStateToProps = state => ({
  recordingLoc: getRecordLocation(state),
  stitcherLoc: getStitcherLocation(state),
  cameraIndex: getCameraIndex(state),
  sndCameraIndex: getSndCameraIndex(state),
  previewIndex: getPreviewIndex(state),
  streamUrl: getStreamUrl(state),
});

const Preferences = connect(
  mapStateToProps,
  actions,
)(PreferenceForm);

export default Preferences;
