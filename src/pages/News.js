import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import config from '../config';
import ListPhoto from '../components/ListPhoto';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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

  componentDidMount() {
    const { fetchImage } = this.props;
    fetchImage();
  }

  render() {
    const { photos, favsPhotos, add, loading, navigation } = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        {loading ?
          <Text>Unsplash</Text>
      :
      <ListPhoto list={photos} add={add} navigation={navigation} favsPhotos={favsPhotos}/>
      }
      </View>
    );
  }
}

export default News;
