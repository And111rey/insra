

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