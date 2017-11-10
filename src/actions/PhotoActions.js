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
  // dispatch loading
  dispatch ({
    type: FETCH_IMAGE,
    payload: {
      loading: true,
      data: []
    }
  });

  // unsplash.photos.listPhotos(2, 15, "latest")
  //   .then(toJson)
  //   .then(data => {
  //     dispatch ({
  //       type: FETCH_IMAGE,
  //       payload: {
  //         data: data,
  //         loading: false
  //       }
  //     });
  //   });
  let favsPhotos = [];
    AsyncStorage.getItem("Favs", (err, favs) => {
      favs = JSON.parse(favs);
      json.forEach((photo) => {
        if(favs.includes(photo.id)) {
          favsPhotos.push(photo);
        }
      });
      dispatch ({
          type: FETCH_IMAGE,
          payload: {
            data: json,
            favsPhotos: favsPhotos,
            loading: false
          }
        });
    });
}

export const add = (content) => (dispatch) => {
  dispatch ({
    type: ADD_PHOTO,
    payload: content
  });
}
