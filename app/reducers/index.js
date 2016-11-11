import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import videos from './videos';
import createNavigation from './navigation';
import createPlayer from './player';
import visibilityFilter from './visibilityFilter';
import createLive from './live';

const rootReducer = combineReducers({
  videos,
  navigation: createNavigation(),
  player: createPlayer(),
  routing,
  visibilityFilter,
  live: createLive(),
});

export default rootReducer;
