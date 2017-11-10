import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Unsplash, { toJson } from 'unsplash-js/native';
import config from '../config';
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

const unsplash = new Unsplash({
  applicationId: config.applicationId,
  secret: config.secret,
  callbackUrl: config.callbackUrl,
});

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    const { fetchFavsImage } = this.props;
    const data = fetchFavsImage();
    console.log(data);
    this.setState({list: data.payload.photos});
    // unsplash.photos.listPhotos(2, 15, "latest")
    //   .then(toJson)
    //   .then(json => {
      // });
  }

  render() {
    const { list } = this.state;
    return (
      <View style={styles.container}>
        <ListPhoto list={list}/>
      </View>
    );
  }
}

export default News;
