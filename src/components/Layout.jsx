import React from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'

function Layout({title, children}) {
  return (
    <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Navbar />
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout