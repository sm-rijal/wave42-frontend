import React from 'react'

function Navbar(props) {
  return (
    <div style={{background: 'grey', padding: 10, color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
            <p>{props.title}</p>
            <p>{props.isLogin ? 'Anda sedang login' : 'Anda belum login'}</p>
        </div>
        <div>
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