import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchInput from './../components/SearchInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
  },
});

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { url } = this.props;
    return (
      <View style={styles.container}>
        <SearchInput onSearchChange={(search) => this.handleChange(search)}/>
      </View>
    );
  }

  handleChange = (search) => {

  };
}

export default Search;
