import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, Dimensions, ImageBackground, TouchableOpacity, StatusBar, Share } from 'react-native';
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
  clickableFav: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  clickableShare: {
    position: 'absolute',
    bottom: 10,
    right: 60,
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingTop:10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10
  },
  bottom: {
    position: 'absolute',
    bottom:0,
    left: 0,
    width: Dimensions.get('window').width,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingLeft: 5,
    paddingRight: 5,
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
          <Text style={{color: 'white'}}>Photo by {photo.user.name}</Text>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.cross}>
            <Text style={{color: 'white'}}>
              X
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.clickableShare}
            onPress={() => this.sharePhoto()}
            >
            <Image style={styles.icon} source={require('./../img/share.png')}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.clickableFav}
            onPress={() => this.favPhoto()}
            >
            <Image style={styles.icon} source={url}/>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    );
  }

  favPhoto() {
    const { photo } = this.state;
    const { add } = this.props;
    add(photo);
  };

  sharePhoto() {
    const { photo } = this.state;
    console.log(photo);
    Share.share({url: photo.links.html});
  };
}

export default connect(state => ({
  favsPhotos: state.photos.favsPhotos
}), dispatch => ({
  add: bindActionCreators(add, dispatch)
}))(FullScreen);
