import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListPhoto from '../components/ListPhoto';

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

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }

  render() {
    const { add, photos, navigation } = this.props;
    return (
      <View style={styles.container}>
        <ListPhoto list={photos} add={add} navigation={navigation} favsPhotos={photos}/>
      </View>
    );
  }
}

export default News;
