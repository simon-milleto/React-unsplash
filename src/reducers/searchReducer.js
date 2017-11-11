import {SEARCH_PHOTO, LAST_SEARCH } from './../actions/SearchActions';
import { AsyncStorage } from 'react-native';

const initialState = {
  searchPhotos: [],
  loading: false,
  lastSearch: []
};

export default function searchState(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PHOTO:
    let res = state.lastSearch;
    if(!res.includes(action.payload.search) && action.payload.search) {
      if(res.length >= 5) res.shift();
      res = [...res, action.payload.search];
      AsyncStorage.setItem("search", JSON.stringify(res)).then((data) => {

      }).catch((err) => {
            console.log(err);
      });
    }

    return {
      ...state,
      loading: action.payload.loading,
      searchPhotos: action.payload.data,
      lastSearch: res
    };

    case LAST_SEARCH:
      return {
        ...state,
        lastSearch: action.payload
      };
    default:
      return state;
  }
}
