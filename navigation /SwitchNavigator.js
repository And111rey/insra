import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native'; // вместо createAppContainer 3x version
import { createSwitchNavigator, createAppContainer } from "react-navigation"

import { Ionicons } from '@expo/vector-icons';

import { TabNavigator } from "./TabNavigator"
import { AuthNavigator } from "./AuthNavigator"
import { Home } from '../screens/Home';


const SwitchNavigator = createSwitchNavigator({
  Home: {
    screen:TabNavigator
  },
  Auth: {
    screen: AuthNavigator
  },
},
{
  initialRouteName: "Auth",
}
)

export default createAppContainer(SwitchNavigator)

 
// const Switch = createSwitchNavigator();

// export const SwitchNavigator = () => {
//   return (
//     <NavigationContainer initialRouteName="Auth">
//       <Switch.Navigator>
//         <Switch.Screen name="Home" component={TabNavigator} options={{ tabBarIcon: ({focused})=><Ionicons name="md-home" color={focused? "#0000e6": "black"} size={32} /> }} />
//         <Switch.Screen  name="Auth" component={AuthNavigator} options={{ tabBarIcon: ({focused})=><Ionicons name="md-home" color={focused? "#0000e6": "black"} size={32} /> }} />

//       </Switch.Navigator>
//     </NavigationContainer>
//   );
// }


