import { connect } from 'react-redux';
import BottomNav from '../components/BottomNav';
import { select } from '../actions/navigation';
import { getSelectedIndex } from '../reducers/navigation';

const mapStateToProps = state => ({
  index: getSelectedIndex(state),
});

const mapDispatchToProps = dispatch => ({
  onSelect: (index) => {
    dispatch(select(index));
  },
});

const BottomNavigator = connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomNav);

export default BottomNavigator;
