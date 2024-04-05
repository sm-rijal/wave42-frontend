const { createContext, useState } = require("react");


export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {

  const [dataTheme, setDataTheme] = useState({
    darkMode: false,
    light: {
      color: 'black',
      background: 'white'
    },
    dark: {
      color: 'white',
      background: 'black'
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
        {children}
    </ThemeContext.Provider>
  )
}

