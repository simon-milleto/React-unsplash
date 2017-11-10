import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import News from './../pages/News';
import { fetchImage } from './../actions/PhotoActions';

export default connect(null, dispatch => ({
  fetchImage: bindActionCreators(fetchImage, dispatch)
}))(News);
