import json from './../data.json';
import {AsyncStorage} from 'react-native';
import config from '../config';
import Unsplash, { toJson } from 'unsplash-js/native';

export const SEARCH_PHOTO = 'SEARCH_PHOTO';

export const LAST_SEARCH = 'LAST_SEARCH';

const unsplash = new Unsplash({
  applicationId: config.applicationId,
  secret: config.secret,
  callbackUrl: config.callbackUrl,
});

export const searchPhoto = (search) => (dispatch) => {
  dispatch ({
    type: SEARCH_PHOTO,
    payload: {
      loading: true,
      data: []
    }
  });
  unsplash.search.photos(search, 2)
  .then(toJson)
  .then(json => {
    dispatch ({
      type: SEARCH_PHOTO,
      payload: {
        loading: false,
        data: json.results,
        search: search
      }
    });
  });
}

export const lastSearch = () => (dispatch) => {
  AsyncStorage.getItem("search", (err, search) => {
    search = JSON.parse(search);
    dispatch ({
        type: LAST_SEARCH,
        payload: search
      });
  });
}
