

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
      default:
        return state
    }
  }