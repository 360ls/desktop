import { connect } from 'react-redux';
import { isPreviewing } from '../reducers/live';
import * as actions from '../actions/live';
import PreviewButton from '../components/PreviewButton';

const mapStateToProps = state => ({
  isPreviewing: isPreviewing(state),
});

const PreviewControl = connect(
  mapStateToProps,
  actions
)(PreviewButton);

export default PreviewControl;
