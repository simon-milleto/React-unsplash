import { combineReducers } from 'redux';
import navState from './navigatorReducer';
import photoState from './photoReducer';

const state = combineReducers({
  nav: navState,
  photos: photoState
});

export default state;
