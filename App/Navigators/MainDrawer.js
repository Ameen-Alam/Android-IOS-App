import React from 'react'
// import { createDrawerNavigator } from 'react-navigation'
// import MainScreen from 'App/Containers/MainScreen/MainScreen'
// import Example from 'App/Containers/Example/ExampleScreen'

import MainTabs from './MainTabs'
import SettingsStack from './SettingsStack'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name="MainTabs" component={MainTabs} />
        <Drawer.Screen name="Settings" component={SettingsStack} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default MainDrawer;