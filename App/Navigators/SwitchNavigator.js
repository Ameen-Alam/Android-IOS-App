import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import AuthScreen from 'App/Containers/AuthScreen/AuthScreen'
import MainDrawer from './MainDrawer'


const SwitchNavigator = createSwitchNavigator({
  Auth: {
    screen: AuthScreen,
  },
  Loading: {
    screen: SplashScreen,
  },
  App: {
    screen: MainDrawer,
  },
});

export default createAppContainer(SwitchNavigator);