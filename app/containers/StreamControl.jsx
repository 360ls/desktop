import { connect } from 'react-redux';
import { isBroadcasting } from '../reducers/live';
import * as actions from '../actions/live';
import RecordButton from '../components/RecordButton';

const mapStateToProps = state => ({
  isBroadcasting: isBroadcasting(state),
});

const StreamControl = connect(
  mapStateToProps,
  actions
)(RecordButton);

export default StreamControl;
