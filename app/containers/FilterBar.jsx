import { connect } from 'react-redux';
import ToolBar from '../components/ToolBar';
import { setVisibilityFilter } from '../actions/videos';

const mapStateToProps = state => ({
  activeFilter: state.visibilityFilter,
});

const mapDispatchToProps = dispatch => ({
  onChange(filter) {
    dispatch(setVisibilityFilter(filter));
  },
});

const FilterBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBar);

export default FilterBar;
