import { connect } from 'react-redux';
import { isBroadcasting } from '../reducers/live';
import * as actions from '../actions/live';
import StreamButton from '../components/StreamButton';

const mapStateToProps = state => ({
  isBroadcasting: isBroadcasting(state),
});

const StreamControl = connect(
  mapStateToProps,
  actions
)(StreamButton);

export default StreamControl;
