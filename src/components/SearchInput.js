import React, { Component } from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  picto: {
    height: 38,
    flex: 1,
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    flex:8,
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: 14
  }
});

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  render() {
    return (
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="Rechercher"
          onChangeText={(text) => this.props.onSearchChange(text)}
        />
        <Image style={styles.picto} source={require(`./../img/search.png`)}/>
      </View>
    );
  }
}

export default SearchInput;
