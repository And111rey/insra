import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { Home } from "../screens/Home"
import { Search } from "../screens/Search"
import { Profile } from "../screens/Profile"
import { Upload } from "../screens/Upload"
import { Activity } from "../screens/Activity"




 
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({focused})=><Ionicons name="md-home" color={focused? "#0000e6": "black"} size={32} /> }} />
        <Tab.Screen name="Search" component={Search} options={{ tabBarIcon: ({focused})=><Ionicons name="md-search" color={focused? "#0000e6": "black"} size={32} /> }}  />
        <Tab.Screen name="Upload" component={Upload} options={{ tabBarIcon: ({focused})=><Ionicons name="ios-add-circle" color={focused? "#0000e6": "black"} size={32} /> }} />
        <Tab.Screen name="Activity" component={Activity} options={{ tabBarIcon: ({focused})=><Ionicons name="ios-heart" color={focused? "#0000e6": "black"} size={32} /> }}  />
        <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({focused})=><Ionicons name="md-person" size={32} color={focused? "#0000e6": "black"} /> }}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

