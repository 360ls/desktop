import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import videos from './videos';
import navigation from './navigation';
import player from './player';

const rootReducer = combineReducers({
  videos,
  navigation,
  player,
  routing,
});

export default rootReducer;
