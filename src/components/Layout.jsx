import React, { useContext } from 'react'
import Navbar from './Navbar'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { ThemeContext } from '../context/ThemeContext';

function Layout({title, children}) {
  const {darkMode, light, dark} = useContext(ThemeContext);

  const mode = darkMode ? dark : light
  return (
    <div style={{backgroundColor: mode.background, color: mode.color, minHeight: '100vh'}}>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
        <Navbar />
        <div style={{padding: 20}}>
            {children}
        </div>
    </div>
  )
}

export default Layout