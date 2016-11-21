import { connect } from 'react-redux';
import PreferenceForm from '../components/PreferenceForm';
import {
  getRecordLocation,
  getStitcherLocation,
  getCameraIndex,
} from '../reducers/preference';
import { savePreference } from '../actions/preference';

const mapStateToProps = state => ({
  recordLoc: getRecordLocation(state),
  stitcherLoc: getStitcherLocation(state),
  cameraIndex: getCameraIndex(state),
});

const mapDispatchToProps = dispatch => ({
  onSave: (cam, stitcher, record) => {
    dispatch(savePreference(cam, stitcher, record));
  },
});

const Preferences = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreferenceForm);

export default Preferences;
