import json from './../data.json';
import {AsyncStorage} from 'react-native';
import config from '../config';
import Unsplash, { toJson } from 'unsplash-js/native';

export const FETCH_IMAGE = 'FETCH_IMAGE';

export const ADD_PHOTO = 'ADD_PHOTO';

const unsplash = new Unsplash({
  applicationId: config.applicationId,
  secret: config.secret,
  callbackUrl: config.callbackUrl,
});

export const fetchImage = () => (dispatch) => {
  dispatch ({
    type: FETCH_IMAGE,
    payload: {
      loading: true,
      data: [],
      favsPhotos: []
    }
  });



  AsyncStorage.getItem("Favs", (err, favs) => {
    favs = favs ? JSON.parse(favs) : [];
    unsplash.photos.listPhotos(2, 15, "latest")
      .then(toJson)
      .then(data => {
        dispatch ({
          type: FETCH_IMAGE,
          payload: {
            data: data,
            favsPhotos: favs,
            loading: false
          }
        });
      });
  });
}

export const add = (content) => (dispatch) => {
  dispatch ({
    type: ADD_PHOTO,
    payload: content
  });
}
