import { createStackNavigator } from 'react-navigation'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
// import MainScreen from 'App/Containers/MainScreen/MainScreen'
import MainDrawer from './MainDrawer'

const AppModalStack = createStackNavigator(
  // {
  //   Home: { screen: MainDrawer }

  // },
  {
    // SplashScreen: SplashScreen,
    MainScreen: MainDrawer,
  },
  {
    // initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
  // {
  //   App: MainDrawer,
  //   Promotion1: {
  //     screen: MainScreen,
  //   },
  // },
  // {
  //   mode: 'modal',
  //   headerMode: 'none',
  // }
);

export default AppModalStack
