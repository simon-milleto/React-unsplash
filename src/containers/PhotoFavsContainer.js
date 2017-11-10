import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Bookmark from './../pages/Bookmark';
import { fetchFavsImage } from './../actions/PhotoActions';

export default connect(null, dispatch => ({
  fetchFavsImage: bindActionCreators(fetchFavsImage, dispatch)
}))(Bookmark);
