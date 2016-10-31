import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import videos from './videos';

const rootReducer = combineReducers({
  videos,
  routing,
});

export default rootReducer;
