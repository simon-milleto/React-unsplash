import { combineReducers } from 'redux';
import navState from './navigatorReducer';
import photoState from './photoReducer';
import searchState from './searchReducer';

const state = combineReducers({
  nav: navState,
  photos: photoState,
  search: searchState
});

export default state;
