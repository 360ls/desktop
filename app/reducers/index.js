import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import videos from './videos';
import navigation from './navigation';

const rootReducer = combineReducers({
  videos,
  navigation,
  routing,
});

export default rootReducer;
