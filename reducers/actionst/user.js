
import firebase from "firebase" 

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
    return  (dispatch) => {
       try{
        const response = firebase.auth().createUserWithEmailAndPassword(email, password) 
        console.log("RESPONS  ", response)

        // firebase.auth().signInWithEmailAndPassword(email, password)
        // .then(() => console.log("LOGON SuCCESS"))
        // .catch(function(error) {
        //     alert(error)
        //   })
        dispatch({type: "UPDATE_BIO",payload: "bio"})
       }catch(e){
           alert(e)
       }
       
    }
}

export const signup = (email, password) => {
    return () => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            alert(error)
          });
    }
}
