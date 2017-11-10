import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation';
import News from './../containers/PhotoContainer';
import Bookmark from './../containers/PhotoFavsContainer';
import Search from './../pages/Search';
import FullScreen from './../pages/FullScreen';

const fade = (props) => {
    const {position, scene} = props

    const index = scene.index

    const translateX = 0
    const translateY = 0

    const opacity = position.interpolate({
        inputRange: [index - 0.7, index, index + 0.7],
        outputRange: [0.3, 1, 0.3]
    })

    return {
        opacity,
        transform: [{translateX}, {translateY}]
    }
}

const HomeStack = StackNavigator({
  Home: {
    screen: News
  },
  FullScreen: {
    screen: FullScreen
  }
}, {
  headerMode: 'none',
  transitionConfig: () => ({
    screenInterpolator: (props) => {
      return fade(props)
    }
  })
});

const BookmarkStack = StackNavigator({
  Bookmark: {
    screen: Bookmark
  },
  FullScreen: {
    screen: FullScreen
  }
}, {
  headerMode: 'none',
  transitionConfig: () => ({
    screenInterpolator: (props) => {
      return fade(props)
    }
  })
});

const tabScenes = {
  News : {
    screen: HomeStack ,
  },
  Bookmark: { screen: BookmarkStack },
  Search: { screen: Search },
};

const tabOptions = {
  initialRouteName: 'News',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#1a1a1a',
    labelStyle: {
      fontSize: 16,
    },
  },
};

export const RootNavigator = TabNavigator(tabScenes, tabOptions);

const TabRouter = ({ dispatch, nav }) => (
  <RootNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })} />
);

TabRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

export default connect(state => ({
  nav: state.nav
}))(TabRouter);
