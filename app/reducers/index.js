import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import createLive from './live';
import createNavigation from './navigation';
import createPlayer from './player';
import createPreference from './preference';
import visibilityFilter from './visibilityFilter';
import videos from './videos';
import createVideo from './video';

const rootReducer = combineReducers({
  live: createLive(),
  navigation: createNavigation(),
  player: createPlayer(),
  preference: createPreference(),
  routing,
  visibilityFilter,
  video: createVideo(),
  videos,
});

export default rootReducer;
