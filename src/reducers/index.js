import { combineReducers } from 'redux';
import navState from './navigatorReducer';
import photo from './photoReducer';

const state = combineReducers({
  nav: navState,
  photo: photo
});

export default state;
