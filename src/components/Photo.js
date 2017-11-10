import React, {Component} from 'react';
import {View, StyleSheet, Image, Dimensions, ImageBackground, TouchableOpacity, AsyncStorage } from 'react-native';

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
    const url = photo.toggled ? require('./../img/star.png') : require('./../img/star_empty.png');
    return (
      <View>
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
      </View>
    );
  }

  favPhoto() {
    const { photo } = this.state;

    let favs = [];
    AsyncStorage.getItem("Favs", (err, favs) => {
      favs = JSON.parse(favs);
      if(!photo.toggled){
        AsyncStorage.setItem("Favs", JSON.stringify([...favs, photo.id])).then((data) => {

        }).catch((err) => {
          console.log(err);
        });
        photo.toggled = true;
      }else{
        let removed = favs.filter((p) => {
          return p !== photo.id;
        });
        AsyncStorage.setItem("Favs", JSON.stringify(removed)).then((data) => {

        }).catch((err) => {
          console.log(err);
        });
        photo.toggled = false;
      }
      this.setState({photo: photo});
    });
  };

}

export default Photo;
