import { connect } from 'react-redux';
import PreferenceField from '../components/PreferenceField';
import { getRecordLocation, getStitcherLocation } from '../reducers/preference';

const mapStateToProps = state => ({
  recordLoc: getRecordLocation(state),
  stitcherLoc: getStitcherLocation(state),
});

const Preferences = connect(
  mapStateToProps,
  null
)(PreferenceField);

export default Preferences;
