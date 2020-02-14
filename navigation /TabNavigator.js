import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from "../screens/Home"
import { Search } from "../screens/Search"
import { Profile } from "../screens/Profile"




 
const Tab = createBottomTabNavigator();

export const   TabNavugator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

