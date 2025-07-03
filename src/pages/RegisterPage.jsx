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
import { useAuth } from '@/context/AuthContext';
import axiosInstance from '@/lib/axiosInstance';
import toast from 'react-hot-toast';
import { ButtonLoading } from '@/components/ui/ButtonLoading';

const RegisterPage = ({ className, ...props }) => {
  const { setUser, loading, setLoading } = useAuth();
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post('/auth/register', {
        name,
        email,
        password,
      });
      setUser(res.data.user);
      toast.success('Register Successful 🎉');
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
                  <CardTitle>Register a new account!</CardTitle>
                  <CardDescription>
                    Enter your email & password below to register a new account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister}>
                    <div className="flex flex-col gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="example@email.com"
                          required
                        />
                      </div>
                      <div className="grid gap-3">
                        <div className="flex items-center">
                          <Label htmlFor="password">Password</Label>
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
                            Register
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 text-center text-sm">
                      Have an account?
                      <Link
                        to="/login"
                        className="underline underline-offset-4"
                      >
                        Login
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

export default RegisterPage;
