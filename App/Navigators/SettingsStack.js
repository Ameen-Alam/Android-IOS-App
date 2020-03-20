import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from 'App/Containers/MainScreen/MainScreen'


const Stack = createStackNavigator();

function SettingsStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Settings List" component={MainScreen} />
        <Stack.Screen name="Notifications" component={MainScreen} />
        <Stack.Screen name="Profile" component={MainScreen} />
        <Stack.Screen name="Settings" component={MainScreen} />
      </Stack.Navigator>
  );
}

export default SettingsStack;
