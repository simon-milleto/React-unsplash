import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Photo from '../components/Photo';

const styles = StyleSheet.create({
  list: {
    display: 'flex',
  },
});

class ListPhoto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list, add, navigation, favsPhotos } = this.props;
    return (
        <FlatList
          data={list}
          renderItem={({item}) => <Photo photo={item} add={add} navigation={navigation} favsPhotos={favsPhotos}/>}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
    );
  }
}

export default ListPhoto;
