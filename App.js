



import * as React from 'react';
// import { TabNavigator} from "./navigation/TabNavigator"


// ------------------REDUCERS LIST---------------------------//
import { firstReducer } from "./reducers/index"
import { user } from "./reducers/index"

//----------------------------------------------------------//

import { createStore, combineReducers, applyMiddleware} from "redux"
import { Provider } from "react-redux"
import thunk from 'redux-thunk';
import logger from "redux-logger"
// import { SwitchNavigator } from "./navigation/SwitchNavigator"
import SwitchNavigator from "./navigation /SwitchNavigator"


const rootReducer = combineReducers({
  firstReducer:firstReducer,
  user: user
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))


export default function App() {
  return (
    <Provider store={store}>
      {/* <TabNavigator /> */}
      <SwitchNavigator />
    </Provider>
  );
}

