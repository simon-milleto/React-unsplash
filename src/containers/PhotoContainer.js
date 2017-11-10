import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import News from './../pages/News';
import { add, fetchImage } from './../actions/PhotoActions';

export default connect(state => ({
  photos: state.photos.apiPhotos,
  favsPhotos: state.photos.favsPhotos,
  loading: state.photos.loading
}), dispatch => ({
  fetchImage: bindActionCreators(fetchImage, dispatch),
  add: bindActionCreators(add, dispatch)
}))(News);
