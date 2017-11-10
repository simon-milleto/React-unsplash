import {FETCH_IMAGE, ADD_PHOTO, } from './../actions/PhotoActions';
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
      if(!state.favsPhotos.includes(action.payload)){
        let tmp = state.favsPhotos.map((photo) => photo.id)
        res = [...state.favsPhotos, action.payload];
        AsyncStorage.setItem("Favs", JSON.stringify([...tmp, action.payload.id])).then((data) => {
        }).catch((err) => {
              console.log(err);
        });
      }else{
        let removed = state.favsPhotos.filter((p) => {
          return p.id !== action.payload.id;
        });
        res = removed;
        removed = removed.map((photo) => photo.id)
        AsyncStorage.setItem("Favs", JSON.stringify(removed)).then((data) => {

        }).catch((err) => {
          console.log(err);
        });
      }
      let apiPhotos = [];
      state.apiPhotos.forEach((photo) => {
          if(res.includes(photo)) {
            photo.toggled = true;
          }else{
            photo.toggled = false;
          }
          apiPhotos.push(photo);
      });
      return {
        ...state,
        favsPhotos: res,
        apiPhotos: apiPhotos
      };
    case FETCH_IMAGE:

      return {
        ...state,
        apiPhotos: action.payload.data,
        favsPhotos: action.payload.favsPhotos,
        loading: action.payload.loading
      };
    default:
      return state;
  }
}
