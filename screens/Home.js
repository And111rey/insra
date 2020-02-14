import React from "react"
import {useSelector, useDispatch} from "react-redux"
import { Text, View, Button } from 'react-native';
import { connect } from "react-redux"
import styles from "../styles"
import {add} from "../reducers/actionst/action"



export const  Home = () =>  {
  const data = useSelector(state => state.firstReducer)
  const dispatch = useDispatch()


const add1 = () => {
  dispatch(add())
}
 

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!{data}</Text>
      <Button title ="Add" onPress={add1}/>
    </View>
  );
}

