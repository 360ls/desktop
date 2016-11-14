import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import videos from './videos';
import createNavigation from './navigation';
import createPlayer from './player';
import visibilityFilter from './visibilityFilter';
import createLive from './live';
import createVideo from './video';
import createPreference from './preference';

const rootReducer = combineReducers({
  videos,
  navigation: createNavigation(),
  player: createPlayer(),
  routing,
  visibilityFilter,
  live: createLive(),
  video: createVideo(),
  preference: createPreference(),
});

export default rootReducer;
