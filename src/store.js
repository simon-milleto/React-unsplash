import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from './reducers/index';

const store = createStore(indexReducer, applyMiddleware(thunk));

export default store;
