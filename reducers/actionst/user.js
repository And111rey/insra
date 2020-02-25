
import firebase from "firebase" 
// import db from "../../config/db"
import db from "../../config/firebase"




export const updateEmail = (email) => {
    return {
        type: "UPDATE_EMAIL",
        payload: email
    }
}

export const updatePass = (email) => {
    return {
        type: "UPDATE_PASS",
        payload: email
    }
}

export const updateUserName = (userName) => {
    return {
        type: "UPDATE_USERNAME",
        payload: userName
    }
}

export const updateBio = (bio) => {
    
    return {
        type: "UPDATE_BIO",
        payload: bio
    }
}

export const loginActionCreator = (email, password) => {
    return  async (dispatch) => {
       try{
        const response = await firebase.auth().signInWithEmailAndPassword(email, password) 
        // console.log("------RESPONS  ", response)

        // firebase.auth().signInWithEmailAndPassword(email, password)
        // .then(() => console.log("LOGON SuCCESS"))
        // .catch(function(error) {
        //     alert(error)
        //   })
        dispatch({type: "LOGIN",payload: response.user})
       }catch(e){
           alert(e)
       }
       
    }
}

export const signupActionCreator = ({email, password, userName, bio}) => {
    return  async (dispatch) => {
       try{
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password) 
        dispatch({type: "SIGNUP",payload: response.user})
        if(response.user.id) {
            const user = {
                uid: response.user,
                email: email,
                userName: userName,
                bio: bio,
                photo: '',
                token: null
            }
            db.firestore().colection("users").doc(response.user.uid).set(user)
            dispatch({type: "SIGNUP", payload: response.user})
        }
  
        
       }catch(e){
           alert(e)
       }
    }
}




///  will make changes in  "loginActionCreator"
// to continue lesson 21

// export const signupActionCreator = (email, password) => {
//     return () => {
//         firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//             alert(error)
//           });
//     }
// }


