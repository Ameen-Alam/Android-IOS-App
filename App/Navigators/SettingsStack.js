import { createStackNavigator } from 'react-navigation'
import NewsFeed from 'App/Containers/MainScreen/NewsFeed/NewsFeed'

const SettingsStack = createStackNavigator({
    SettingsList: {
      screen: NewsFeed,
      navigationOptions: {
        headerTitle: 'Settings List',
      },
    },
    Profile: {
      screen: NewsFeed,
      navigationOptions: {
        headerTitle: 'Profile',
      },
    },
  });

export default SettingsStack
