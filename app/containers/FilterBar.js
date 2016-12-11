import { connect } from 'react-redux';
import ToolBar from '../components/ToolBar';
import { setVisibilityFilter } from '../actions/videos';
import { getVisibilityFilter } from '../reducers/visibilityFilter';

const mapStateToProps = state => ({
  activeFilter: getVisibilityFilter(state),
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
