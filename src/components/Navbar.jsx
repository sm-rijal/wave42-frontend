import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(props) {
  return (
    <div className='nav-left' style={{background: 'grey', padding: 10, color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div className='group-menu'>
            <NavLink to='/' className='menu'>Home</NavLink>
            <NavLink to='/about' className='menu'>About</NavLink>
            <NavLink to='/contact' className='menu'>Contact</NavLink>
            <NavLink to='/product' className='menu'>Products</NavLink>
            <NavLink to='/charts' className='menu'>Charts</NavLink>
        </div>
        <div className='nav-right'>
          <p>{props.isLogin ? 'Anda sedang login' : 'Anda belum login'}</p>

            {!props.isLogin ? 
                <button onClick={props.handleLogin}>Login</button>
                :
                <button onClick={props.handleLogout}>Logout</button>  
            }

        </div>
    </div>
  )
}

export default Navbar