import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainScreen from 'App/Containers/MainScreen/MainScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import AuthScreen from 'App/Containers/AuthScreen/AuthScreen'
import AppModalStack from './AppModalStack'



const SwitchNavigator = createSwitchNavigator({
  Auth: {
    screen: AuthScreen,
  },
  Loading: {
    screen: SplashScreen,
  },
  App: {
    screen: AppModalStack,
  },
});

export default createAppContainer(SwitchNavigator);