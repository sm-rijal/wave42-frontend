import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(props) {
  return (
    <div className='nav-left' style={{background: 'grey', padding: 10, color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div className='group-menu'>
            <NavLink to='/' className='menu' activeClassName='active' >Home</NavLink>
            <NavLink to='/about' className='menu'>About</NavLink>
            <NavLink to='/contact' className='menu'>Contact</NavLink>
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