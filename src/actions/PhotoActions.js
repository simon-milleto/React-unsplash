import json from './../data.json';
import {AsyncStorage} from 'react-native';

export const FETCH_IMAGE = 'FETCH_IMAGE';
export const FETCH_FAVS_IMAGE = 'FETCH_FAVS_IMAGE';

export const fetchImage = () => (dispatch) => {
  let res = [];
  AsyncStorage.getItem("Favs").then((data) => {
    res = JSON.parse(data);
    console.log(res);
    json.forEach((photo) => {
      photo.toggled = res.includes(photo.id);
    });
  });
  return ({
    type: FETCH_IMAGE,
    payload: {
      photos: json
    }
  });
}

export const fetchFavsImage = () => (dispatch) => {
  let res = [];
  AsyncStorage.getItem("Favs").then((data) => {
    res = JSON.parse(data);
    json.forEach((photo, index) => {
      if(!res.includes(photo.id)){
        json.splice(index, 1);
      }
      photo.toggled = true;
    });
  });
  return ({
    type: FETCH_FAVS_IMAGE,
    payload: {
      photos: json
    }
  });
}
