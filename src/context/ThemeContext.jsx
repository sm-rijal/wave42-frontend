import { ToastContainer } from "react-toastify";

const { createContext, useState } = require("react");


export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {

  const [dataTheme, setDataTheme] = useState({
    darkMode: false,
    light: {
      color: '#31363F',
      background: 'white'
    },
    dark: {
      color: 'white',
      background: '#31363F'
    } 
  });

  const handleToggleTheme = () => {
    setDataTheme((prevState) => ({
      ...prevState,
      darkMode: !dataTheme.darkMode
    }))
  }

  return (
    <ThemeContext.Provider value={{...dataTheme, handleToggleTheme}}>
        <ToastContainer position="top-center" autoClose={2000} />
        {children}
    </ThemeContext.Provider>
  )
}

