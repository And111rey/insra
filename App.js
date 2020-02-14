// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// // import styles from "./styles"

// import TabNavagator from "./navgation/TabNavigator" 


// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <TabNavagator></TabNavagator> */}
//       <Text>Navigation here</Text>
//     </View>
//   );
// }



import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { Home } from "./screens/Home"
// import { Search } from "./screens/Search"
// import { Profile } from "./screens/Profile"

import { TabNavugator} from "./navigation /TabNavigator"




 
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TabNavugator />
  );
}

