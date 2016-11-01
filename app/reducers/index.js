import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import videos from './videos';
import navigation from './navigation';
import player from './player';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  videos,
  navigation,
  player,
  routing,
  visibilityFilter,
});

export default rootReducer;
