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
import { TabNavugator} from "./navigation /TabNavigator"
import { firstReducer } from "./reducers/index"
import { createStore, combineReducers} from "redux"
import { Provider } from "react-redux"
import { useDispatch } from 'react-redux/lib/hooks/useDispatch';


const rootReducer = combineReducers({
  firstReducer:firstReducer
})

const store = createStore(rootReducer)


export default function App() {
  return (
    <Provider store={store}>
      <TabNavugator />
    </Provider>
  );
}

