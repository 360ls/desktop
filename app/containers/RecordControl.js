import { connect } from 'react-redux';
import { isStreaming } from '../reducers/live';
import * as actions from '../actions/live';
import RecordButton from '../components/RecordButton';

const mapStateToProps = state => ({
  isStreaming: isStreaming(state),
});

const RecordControl = connect(
  mapStateToProps,
  actions
)(RecordButton);

export default RecordControl;
