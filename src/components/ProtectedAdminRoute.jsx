import { useAuth } from '@/context/AuthContext';
import React from 'react';
import { Navigate, useNavigate } from 'react-router';
import { Spinner } from './ui/Spinner';
import NotAuthorizedPage from '@/pages/NotAuthorizedPage';

const ProtectedAdminRoute = ({ children }) => {
  let navigate = useNavigate();
  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    navigate('/login');
  }

  if (user.role !== 'ADMIN') {
    return <NotAuthorizedPage />;
  }
  return children;
};

export default ProtectedAdminRoute;
