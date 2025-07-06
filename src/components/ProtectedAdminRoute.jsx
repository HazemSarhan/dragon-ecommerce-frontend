import { useAuth } from '@/context/AuthContext';
import React from 'react';
import { Navigate } from 'react-router';
import { Spinner } from './ui/Spinner';
import NotAuthorizedPage from '@/pages/NotAuthorizedPage';

const ProtectedAdminRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  if (user.role !== 'ADMIN') {
    return <NotAuthorizedPage />;
  }
  return children;
};

export default ProtectedAdminRoute;
