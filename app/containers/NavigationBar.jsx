import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { toggle, close, change } from '../actions/navigation';
import { getNavStatus } from '../reducers/navigation';

const mapStateToProps = state => ({
  open: getNavStatus(state),
});

const mapDispatchToProps = dispatch => ({
  onToggle: () => {
    dispatch(toggle());
  },
  onChange: (isOpen) => {
    dispatch(change(isOpen));
  },
  onClose: () => {
    dispatch(close());
  },
});

const NavigationBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

export default NavigationBar;
