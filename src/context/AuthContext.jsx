import { createContext, useState } from "react";


export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'))

    const handleLogin = () => {
        setIsLogin(true)
        localStorage.setItem('isLogin', true)
    }

    const handleLogout = () => {
        setIsLogin(false)
        localStorage.removeItem('isLogin')
    }

  return (
    <AuthContext.Provider value={{isLogin, handleLogin, handleLogout}}>
      {children}
    </AuthContext.Provider>
  )
}

