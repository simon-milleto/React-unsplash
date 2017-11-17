import React, { Component } from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  picto: {
    height: 38,
    flex: 1,
  },
  img: {
    height: 38,
    width: 38
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    flex:8,
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
    const { text } = this.state
    return (
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="Rechercher"
          value={text}
          onChangeText={(tx) => this.setState({text: tx})}
          onFocus={() => this.props.handleFocus(true)}
          onBlur={() => this.props.handleFocus(false)}
        />
        <TouchableOpacity style={styles.picto}
          onPress={() => this.props.onSearchChange(this.state.text)}>
          <Image style={styles.img} source={require(`./../img/search.png`)}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SearchInput;
