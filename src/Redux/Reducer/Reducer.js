const initialState = {
    register: [
      {
        name: 'floulen',
        email: 'floulen@floulen',
      }
    ],
  }
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'add':
        return { ...state, register: [...state.register,action.payload]}  
      default:
        return state;
    }
  }
  
  export default rootReducer