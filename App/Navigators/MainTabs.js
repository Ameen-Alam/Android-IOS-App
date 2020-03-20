import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import MyVideo from 'App/Containers/MainScreen/MyVideo/MyVideo'
import NewsFeed from 'App/Containers/MainScreen/NewsFeed/NewsFeed'
import TopTrending from 'App/Containers/MainScreen/TopTrending/TopTrending'
import { Metrics, Helpers, Colors } from 'App/Theme'

import { View, Text, TouchableOpacity } from 'react-native';

function MyTabBar({ state, descriptors, navigation }) {
  React.useEffect(() => {
  const unsubscribe = navigation.addListener('tabPress', e => {
    // Prevent default behavior

    e.preventDefault();
    // Do something manually
    // ...
  });

  return unsubscribe;
}, [navigation]);
  return (
    <View style={{ flexDirection: 'row', backgroundColor: "white", borderTopColor: Colors.text, borderTopWidth: 1, }}>
  
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
          
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };


        
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[Metrics.verticalPadding, Helpers.fillRowCenter]}
          >
            <Text style={{ color: isFocused ? Colors.brand : Colors.text }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const Tab = createBottomTabNavigator();


function MyTabs() {
  
  return (

      <Tab.Navigator 
       tabBar={props => <MyTabBar {...props} />} 
       initialRouteName="NewsFeed"
       tabBarOptions={{
        activeTintColor: '#e91e63',
       }}
     >
      <Tab.Screen
        name="NewsFeed"
        component={NewsFeed}
        options={{
          tabBarLabel: 'News Feed',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="TopTrending"
        component={TopTrending}
        options={{
          tabBarLabel: 'Top Trending',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MyVideo"
          component={MyVideo}
          options={{
            tabBarLabel: 'My Video',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>

  );
}




export default MyTabs;