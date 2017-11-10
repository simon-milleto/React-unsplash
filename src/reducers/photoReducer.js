import {FETCH_IMAGE, FETCH_FAVS_IMAGE} from './../actions/PhotoActions';

const initialState = 0;

export default function postState(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGE:
      return {
        ...state,
        loading: true,
        messages: [
          {
            key: 'loading',
          }
        ]
      };
    case FETCH_FAVS_IMAGE:
      return {
        ...state,
        loading: true,
        messages: [
          {
            key: 'loading',
          }
        ]
      };
    default:
      return state;
  }
}
