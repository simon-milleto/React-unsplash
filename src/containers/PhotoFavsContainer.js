import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Bookmark from './../pages/Bookmark';
import { fetchFavsImage, add } from './../actions/PhotoActions';

export default connect(state => ({
  photos: state.photos.favsPhotos
}), dispatch => ({
  add: bindActionCreators(add, dispatch)
}))(Bookmark);
