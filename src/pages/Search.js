import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import SearchInput from './../components/SearchInput';
import ListPhoto from './../components/ListPhoto';
import Spinner from 'react-native-spinkit';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 80,
  },
  input: {
    flex:1,
  },
  lastSearch: {
    position:'absolute',
    top: 50,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    paddingLeft: 30,
    zIndex: 1000
  },
  lastSearchText: {
    paddingTop: 5,
    paddingBottom: 5,
    fontStyle: 'italic'
  }
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    }
  }

  componentDidMount() {
    const { getLastSearch } = this.props;
    getLastSearch();
  }

  render() {
    const { url, navigation, add, searchPhotos, loading, lastSearch } = this.props;
    const { focus } = this.state;
    return (
      <View style={styles.container}>
        <SearchInput
          style={styles.input}
          onSearchChange={(search) => this.handleSearch(search)}
          handleFocus={(focus) => this.setState({focus: true})}/>
          {
            focus ?
            <View style={styles.lastSearch}>
              <FlatList
                data={lastSearch.reverse()}
                renderItem={({item}) => <TouchableOpacity onPress={() => this.handleSearch(item)}><Text style={styles.lastSearchText}>{item}</Text></TouchableOpacity>}
                keyExtractor={(item) => item}
                numColumns={1}
              />
            </View> :
            <View></View>
          }
          {
            loading ?
            <Spinner isVisible={true} size={100} type="Bounce"/> :
            <ListPhoto list={searchPhotos} add={add} navigation={navigation} favsPhotos={[]} />
          }
    </View>
    );
  }

  handleSearch = (search) => {
    const { searchPhoto } = this.props;
    this.setState({focus: false})
    searchPhoto(search)
  };
}

export default Search;
