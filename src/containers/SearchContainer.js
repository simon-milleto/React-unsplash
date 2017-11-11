import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from './../pages/Search';
import { searchPhoto, lastSearch } from './../actions/SearchActions';
import { add } from './../actions/PhotoActions';

export default connect(state => ({
  searchPhotos: state.search.searchPhotos,
  loading: state.search.loading,
  lastSearch: state.search.lastSearch
}), dispatch => ({
  searchPhoto: bindActionCreators(searchPhoto, dispatch),
  add: bindActionCreators(add, dispatch),
  getLastSearch: bindActionCreators(lastSearch, dispatch),
}))(Search);
