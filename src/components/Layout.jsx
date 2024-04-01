import React from 'react'
import Navbar from './Navbar'
import { HelmetProvider, Helmet } from 'react-helmet-async'

function Layout({title, children}) {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
        <Navbar />
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout