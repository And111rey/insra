


import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Text, View, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import styles from "../styles"

import { updateEmail } from "../reducers/actionst/user"
import { updatePass } from "../reducers/actionst/user"
// import { userName } from "../reducers/actionst/user"
import { updateBio } from "../reducers/actionst/user"
import { updateUserName} from "../reducers/actionst/user"


export const SignUp = () =>  {
  const dataFromReducer = useSelector(state => state)
  // const passFromRducer = useSelector(state => state.pass)
  const dispatch = useDispatch()

  const signData = useSelector(state => state.user)
  const show = () => {
      console.log("....  ", signData)
  }

  return (
      <TouchableWithoutFeedback
          onPress={() => {
              Keyboard.dismiss();
          }}
      >
          <View
              Keyboard
              style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
              }}
          >
            <ScrollView>
              <TextInput
                  style={styles.border}
                  value={dataFromReducer.user}
                  onChangeText={input => dispatch(updateEmail(input))}
                  placeholder="Email"
              />
              <TextInput
                  style={styles.border}
                  value={dataFromReducer.pass}
                  onChangeText={input => dispatch(updatePass(input))}
                  secureTextEntry={true}
                  placeholder="Password"
              />
                            <TextInput
                  style={styles.border}
                  value={dataFromReducer.userName}
                  onChangeText={input => dispatch(updateUserName(input))}
                  placeholder="User name"
              />
                            <TextInput
                  style={styles.border}
                  value={dataFromReducer.bio}
                  placeholder="b i o "
                  onChangeText={input => dispatch(updateBio(input))}
              />

              <TouchableOpacity  style={styles.button}  onPress={show} >
                  <Text>SignUp</Text>
              </TouchableOpacity>
              </ScrollView>
          </View>
      </TouchableWithoutFeedback>
  );
}