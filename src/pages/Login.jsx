import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import Layout from '../components/Layout';
import { Navigate } from 'react-router-dom';

function Login() {
  const {isLogin, handleLogin} = useContext(AuthContext);

  if(isLogin){
    return <Navigate to='/' />
  }

  return (
    <Layout>
        <div>
            <h3>Login Page</h3>
            <button onClick={handleLogin}>Login</button>
        </div>
    </Layout>
  )
}

export default Login