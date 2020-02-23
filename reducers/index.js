

 export const  firstReducer = (state = 54554, action) => {
    switch (action.type) {
      case 'CHANGE':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }



  export const  user = (state = {}, action) => {
    switch (action.type) {
      case 'UPDATE_EMAIL':
        console.log("***email***", action.payload)
        return {...state, email: action.payload}
      case "UPDATE_PASS":
        console.log("**pass***", action.payload)
        return {...state, password: action.payload}
      case "UPDATE_USERNAME":
        console.log("**UserName***", action.payload)
        return {...state, userName: action.payload}
      case "UPDATE_BIO":
        console.log("**BIO***", action.payload)
        return {...state, bio: action.payload}
            
        default:
        return state
    }
  }
  //проверить стейт , почему не добавляется новій обьект userName