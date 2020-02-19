import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer ,  } from '@react-navigation/native'; // вместо createAppContainer
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createSwitchNavigator, creatS } from "react-navigation"

// import { createStackNavigator } from '@react-navigation/stack';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack"
import { Ionicons } from '@expo/vector-icons';

// import { TabNavigator } from "./TabNavigator"

import { Login } from "../screens/Login"
import { SignUp } from "../screens/SignUp"



const logAndDignStack = createStackNavigator({
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  }
})

export const AuthNavigator = createAppContainer(logAndDignStack)

 
// const Stack = createStackNavigator();

// export const AuthNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} options={{ tabBarIcon: ({focused})=><Ionicons name="md-home" color={focused? "#0000e6": "black"} size={32} /> }} />
//         <Stack.Screen name="SignUp" component={SignUp} options={{ tabBarIcon: ({focused})=><Ionicons name="md-home" color={focused? "#0000e6": "black"} size={32} /> }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

