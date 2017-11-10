import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, Dimensions, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add } from './../actions/PhotoActions';

const styles = StyleSheet.create({
  photo: {
    width: (Dimensions.get('window').width),
    height: (Dimensions.get('window').height)
  },
  icon: {
    width: 40,
    height: 40,
  },
  clickable: {
    position: 'absolute',
    bottom: 70,
    right: 10,
  },
  header: {
    backgroundColor: 'rgba(237, 237, 237, 0.7)',
    paddingTop:10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
  },
  cross: {
    position:'absolute',
    left: (Dimensions.get('window').width) - 20,
    top: 10,

  }
});

class FullScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.navigation.state.params.photo
    };
  }

  render() {
    const { photo } = this.state;
    const { favsPhotos } = this.props;
    const url = favsPhotos.includes(photo) ? require('./../img/star.png') : require('./../img/star_empty.png');
    return (
      <View>
        <StatusBar hidden={true} />
        <ImageBackground style={styles.photo}
        source={{
          uri: photo.urls.full
        }}>
        <View style={styles.header}>
          <Text>Photo by {photo.user.name}</Text>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.cross}>
            <Text>
              X
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.clickable}
          onPress={() => this.favPhoto()}
          >
          <Image style={styles.icon} source={url}/>
        </TouchableOpacity>
      </ImageBackground>
    </View>
    );
  }

  favPhoto() {
    const { photo } = this.state;
    const { add } = this.props;
    add(photo);
  };
}

export default connect(state => ({
  favsPhotos: state.photos.favsPhotos
}), dispatch => ({
  add: bindActionCreators(add, dispatch)
}))(FullScreen);
