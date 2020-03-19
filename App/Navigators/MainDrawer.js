import { createDrawerNavigator } from 'react-navigation'
import MainScreen from 'App/Containers/MainScreen/MainScreen'
import Example from 'App/Containers/Example/ExampleScreen'

import MainTabs from './MainTabs'
import SettingsStack from './SettingsStack'

const MainDrawer = createDrawerNavigator({
    MainTabs: MainTabs,
    Settings: SettingsStack,
});
  
export default MainDrawer;