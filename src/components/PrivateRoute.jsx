import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../hook/useAuthContext';

const PrivateRoute = ({ children }) => {
  const isToken = localStorage.getItem('accessToken');
  const { user } = useAuthContext();

  if (!isToken) {
    return <Navigate to='/login' replace />;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
