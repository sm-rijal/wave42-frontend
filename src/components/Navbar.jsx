import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

function Navbar(props) {
  const {darkMode, handleToggleTheme} = useContext(ThemeContext);
  const {isLogin, handleLogin, handleLogout} = useContext(AuthContext);

  // console.log(isLogin);

  return (
    <div className='nav-left' style={{backgroundColor: 'grey', padding: 10, color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div className='group-menu'>
            <NavLink to='/' className='menu'>Home</NavLink>
            <NavLink to='/about' className='menu'>About</NavLink>
            <NavLink to='/contact' className='menu'>Contact</NavLink>
            <NavLink to='/product' className='menu'>Products</NavLink>
            <NavLink to='/charts' className='menu'>Charts</NavLink>
            {
              !isLogin ?
              <NavLink to='/login' className='menu'>Login</NavLink>
              :
              ''
            }
            <button onClick={handleToggleTheme}>Theme is {darkMode ? 'Dark' : 'Light'}</button>
        </div>
        <div className='nav-right'>
          <p>{isLogin ? 'Anda sedang login' : 'Anda belum login'}</p>

            {!isLogin ? 
                <button onClick={handleLogin}>Login</button>
                :
                <button onClick={handleLogout}>Logout</button>  
            }

        </div>
    </div>
  )
}

export default Navbar