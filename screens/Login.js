

import React  from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Text, View, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity , Keyboard } from 'react-native';
import styles from "../styles"

import { updateEmail, updatePass, loginActionCreator, signup } from "../reducers/actionst/user"
import firebase from "firebase"


export const Login = ({ navigation }) => {
    const emaiFromRducer = useSelector(state => state.user.email);
    const passFromRducer = useSelector(state => state.user.password);
    const dispatch = useDispatch();
    console.log(emaiFromRducer, "....", passFromRducer);

    const login = () => {
        // console.log('///////', emaiFromRducer)
        // if (emaiFromRducer.email) {
        //   navigation.navigate("HomeStack")
        // }
        dispatch(loginActionCreator(emaiFromRducer, passFromRducer));
    };

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
                <TextInput
                    style={styles.border}
                    value={emaiFromRducer}
                    onChangeText={input => dispatch(updateEmail(input))}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.border}
                    secureTextEntry={true}
                    value={passFromRducer}
                    onChangeText={input => dispatch(updatePass(input))}
                    placeholder="Password"
                />

                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text>Login</Text>
                </TouchableOpacity>

                <Text>or</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SignUp")}
                >
                    <Text>Go to SignUp</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};