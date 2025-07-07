import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router';

const NotAuthorizedPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-9xl font-bold mb-4 drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]">
          401
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Sorry you are not allowed to access this route.
        </p>
        <Link to="/">
          <Button>Go back home</Button>
        </Link>
      </div>
    </>
  );
};

export default NotAuthorizedPage;
