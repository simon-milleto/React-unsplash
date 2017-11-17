import {FETCH_IMAGE, ADD_PHOTO } from './../actions/PhotoActions';
import { AsyncStorage } from 'react-native';

const initialState = {
  favsPhotos: [],
  apiPhotos: [],
  loading: false
};

export default function photoState(state = initialState, action) {
  switch (action.type) {
    case ADD_PHOTO:
    let res = [];
    let check = false;
    state.favsPhotos.forEach((p) => {
      p.id == action.payload.id ? check = true : '';
    });
      if(!check){
        res = [...state.favsPhotos, action.payload];
        AsyncStorage.setItem("Favs", JSON.stringify([...state.favsPhotos, action.payload])).then((data) => {
        }).catch((err) => {
              console.log(err);
        });
      }else{
        let removed = state.favsPhotos.filter((p) => {
          return p.id !== action.payload.id;
        });
        res = removed;
        AsyncStorage.setItem("Favs", JSON.stringify(removed)).then((data) => {

        }).catch((err) => {
          console.log(err);
        });
      }
      return {
        ...state,
        favsPhotos: res,
        apiPhotos: state.apiPhotos
      };
    case FETCH_IMAGE:

      return {
        apiPhotos: action.payload.data,
        favsPhotos: action.payload.favsPhotos,
        loading: action.payload.loading
      };
    default:
      return state;
  }
}
