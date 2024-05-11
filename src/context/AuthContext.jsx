import { createContext, useReducer, useState } from "react";


export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type){
      case 'LOGIN':
        localStorage.setItem('accessToken', action.payload.accessToken)
        return {user: action.payload.user}
      
        case 'LOGOUT':
          localStorage.removeItem('accessToken')
          return {user: null}
        default:
          return state
    }
}

export const AuthContextProvider = ({children}) => {


    const [state, dispatch] = useReducer(authReducer)
    // console.log('contextAuth', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}

