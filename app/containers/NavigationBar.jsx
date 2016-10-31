import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { toggle, close, change } from '../actions/navigation';

const mapStateToProps = state => ({
  open: state.navigation.open,
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
