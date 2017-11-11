import React, {Component} from 'react';
import {TouchableWithoutFeedback, StyleSheet, Image, Dimensions, ImageBackground, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add } from './../actions/PhotoActions';

const styles = StyleSheet.create({
  photo: {
    width: (Dimensions.get('window').width/2) - 30,
    height: (Dimensions.get('window').width/2) - 30,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
  icon: {
    width: 40,
    height: 40,
  },
  clickable: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  }
});

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.photo,
    };
  }

  render() {
    const { photo } = this.state;
    let { favsPhotos } = this.props;

    let check = false;
    favsPhotos.forEach((p) => {
      p.id == photo.id ? check = true : '';
    });

    const url = check ? require('./../img/star.png') : require('./../img/star_empty.png');

    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('FullScreen', {photo: photo})}>
        <ImageBackground style={styles.photo}
        source={{
          uri: photo.urls.thumb
        }}>
        <TouchableOpacity
          onPress={() => this.favPhoto()}
          style={styles.clickable}
          >
          <Image style={styles.icon} source={url}/>
        </TouchableOpacity>
      </ImageBackground>
      </TouchableWithoutFeedback>
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
}))(Photo);
