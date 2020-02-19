

import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Text, View, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity , Keyboard } from 'react-native';
import styles from "../styles"

import { updateEmail } from "../reducers/actionst/user"
import { updatePass } from "../reducers/actionst/user"


export const Login = ({navigation}) =>  {
  const emaiFromRducer = useSelector(state => state.user)
  const passFromRducer = useSelector(state => state.pass)
  const dispatch = useDispatch()


  /// выводит проблему иза того до "value={emaiFromRducer}" не приходит до того как редюсер сработает  

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View Keyboard style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login</Text>
        <TextInput value={emaiFromRducer} onChangeText={input => dispatch(updateEmail(input))}  placeholder="Email"/>
        <TextInput value ={passFromRducer} onChangeText={input => dispatch(updatePass(input))}  placeholder="Password"/>
        <Button style={styles.button} title="Go to SignUp" onPress={()=>navigation.navigate("HomeStack")}/>
        
        <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate("SignUp")} >
            <Text>Go to SignUp</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}