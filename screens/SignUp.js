// import React from 'react';

// import { Text, View, TextInput } from 'react-native';



// export const  SignUp = () =>  {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 
//       <Text>SignUp</Text>
//     </View>
//   );
// }

import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from "../styles"

import { updateEmail } from "../reducers/actionst/user"
import { updatePass } from "../reducers/actionst/user"


export const SignUp = () =>  {
  const emaiFromRducer = useSelector(state => state.user)
  const passFromRducer = useSelector(state => state.pass)
  const dispatch = useDispatch()


  /// выводит проблему иза того до "value={emaiFromRducer}" не приходит до того как редюсер сработает  

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View Keyboard style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SignUp</Text>
        <TextInput value={emaiFromRducer} onChangeText={input => dispatch(updateEmail(input))}  placeholder="Email"/>
        <TextInput value ={passFromRducer} onChangeText={input => dispatch(updatePass(input))}  placeholder="Password"/>

      </View>
    </TouchableWithoutFeedback>
  );
}