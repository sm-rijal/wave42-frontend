import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext';
import { AuthContext } from '../../context/AuthContext';

import { IoMoon } from "react-icons/io5";
import { ImSun } from "react-icons/im";
import { useAuthContext } from '../../hook/useAuthContext';

function Navbar(props) {
  const {darkMode, handleToggleTheme} = useContext(ThemeContext);
  // const {isLogin, handleLogin, handleLogout} = useContext(AuthContext);
  // console.log(isLogin);
  const navigate = useNavigate()
  const {user, dispatch} = useAuthContext()
  
  const handleLogout = () => {

    dispatch({type: 'LOGOUT'})
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={!darkMode ? 'dark' : '#e3f2fd'}>
      <div className="container-fluid">
        <NavLink to='/' className='navbar-brand'>WAVE 42</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/' className='nav-link'>Home</NavLink>
            </li>
            { user && 
              <>
                <li className="nav-item">
                <NavLink to='/about' className='nav-link'>About</NavLink>  
                </li>
                <li className="nav-item">
                  <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/product' className='nav-link'>Products</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/charts' className='nav-link'>Charts</NavLink>
                </li>
              </>
            }

            {!user &&
              <>
                <li className="nav-item">
                  <NavLink to='/register' className='nav-link'>Register</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/login' className='nav-link'>Login</NavLink>
                </li>
              </>
            }
          </ul>
          <div className='d-flex gap-3 align-items-center'>
            {
              darkMode ?
              <IoMoon color='#31363F' onClick={handleToggleTheme} size={20} cursor='pointer' />
              :
              <ImSun color='#FFF6F6' onClick={handleToggleTheme} size={20} cursor='pointer' />
            }
            <span className="d-flex align-items-center">

              {!user &&
                <>
                  <button className='btn btn-light btn-sm' onClick={() => navigate('/login')}>Login</button>
                </> 
              }
              { user &&
                <>
                <span className='mx-3 text-info'>{user.name}</span>
                  <button className='btn btn-light btn-sm' onClick={handleLogout}>Logout</button>  
                </>
              }
            </span>

          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar