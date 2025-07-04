import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router';
import axiosInstance from '@/lib/axiosInstance';
import toast from 'react-hot-toast';
import { useAuth } from '@/context/AuthContext';
import { ButtonLoading } from '@/components/ui/ButtonLoading';

const LoginPage = ({ className, ...props }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, user, loading, setLoading } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post('/auth/login', {
        email,
        password,
      });
      const data = res.data;
      setUser(data.user);
      toast.success('Login Successful 🎉');
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div
          className={cn('flex flex-col gap-6 w-full max-w-md', className)}
          {...props}
        >
          <div className="relative overflow-hidden rounded-xl p-[1px] bg-transparent">
            <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] z-0" />

            {/* Card content */}
            <div className="relative z-10 bg-white dark:bg-slate-950 text-black dark:text-white rounded-xl backdrop-blur-3xl p-5 h-full">
              <Card>
                <CardHeader>
                  <div className="absolute top-0 left-0 w-20 h-20 bg-purple-600/80 blur-2xl rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                  <CardTitle>Login to your account</CardTitle>
                  <CardDescription>
                    Enter your email below to login to your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin}>
                    <div className="flex flex-col gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="example@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-3">
                        <div className="flex items-center">
                          <Label htmlFor="password">Password</Label>
                          <a
                            href="#"
                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                          >
                            Forgot your password?
                          </a>
                        </div>
                        <Input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        {loading ? (
                          <ButtonLoading />
                        ) : (
                          <Button type="submit" className="w-full">
                            Login
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 text-center text-sm">
                      Don&apos;t have an account?
                      <Link
                        to="/register"
                        className="underline underline-offset-4"
                      >
                        Sign up
                      </Link>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
