import SidebarLayout from '@/components/SidebarLayout';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { AppWindowIcon, CodeIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import axiosInstance from '@/lib/axiosInstance';
import toast from 'react-hot-toast';
import { ButtonLoading } from '@/components/ui/ButtonLoading';

export default function AccountSettings() {
  const { user, setLoading, loading, setUser } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangeInfo = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosInstance.patch('/user/updateInfo', {
        name,
        email,
      });
      toast.success(res.data.message || 'Profile updated!');
      setUser((prev) => ({ ...prev, name, email }));
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.patch('/user/updatePassword', {
        currentPassword,
        newPassword,
      });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SidebarLayout breadcrumbTitle="Account Settings">
      <h1 className="text-2xl font-bold">Account Settings</h1>
      <p className="text-gray-700 dark:text-gray-400">
        View & Update Your Personal and Contact Information.
      </p>

      <section className="px-2">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <form onSubmit={handleChangeInfo}>
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                      Make changes to your account here. Click save when
                      you&apos;re done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="tabs-demo-name">Name</Label>
                      <Input
                        id="tabs-demo-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="tabs-demo-email">Email</Label>
                      <Input
                        id="tabs-demo-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    {loading ? (
                      <ButtonLoading />
                    ) : (
                      <Button type="submit">Save changes</Button>
                    )}
                  </CardFooter>
                </Card>
              </form>
            </TabsContent>
            <TabsContent value="password">
              <form onSubmit={handleChangePassword}>
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you&apos;ll be
                      logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="tabs-demo-current">
                        Current password
                      </Label>
                      <Input
                        id="tabs-demo-current"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="tabs-demo-new">New password</Label>
                      <Input
                        id="tabs-demo-new"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save password</Button>
                  </CardFooter>
                </Card>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </SidebarLayout>
  );
}
