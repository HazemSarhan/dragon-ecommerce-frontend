import logo from '@/assets/dragon-logo.png';
import { IoIosSearch } from 'react-icons/io';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useState } from 'react';
import { categories } from '@/data';
import MagicButton from './ui/MagicButton';
import { useAuth } from '@/context/AuthContext';

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm font-medium leading-none hover:text-purple-500">
            {title}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:block w-full max-w-md relative">
          <input
            type="search"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-700 dark:text-purple-300 text-lg" />
        </div>

        {/* Nav Items */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <div className="flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base px-3 bg-transparent hover:text-purple-700 dark:hover:text-purple-300">
                      Categories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid md:w-[480px] md:grid-cols-2">
                        {categories.map((category) => (
                          <ListItem
                            key={category.title}
                            title={category.title}
                            href={category.href}
                          >
                            {category.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="text-base" variant="outline">
                      {user?.name}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-white dark:bg-zinc-900 shadow-lg border border-border rounded-md"
                  >
                    <Link to="/my-account">
                      <DropdownMenuItem>My Account</DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="text-base" variant="outline">
                      My Account
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-white dark:bg-zinc-900 shadow-lg border border-border rounded-md"
                  >
                    <Link to="/login">
                      <DropdownMenuItem>Login</DropdownMenuItem>
                    </Link>
                    <Link to="/register">
                      <DropdownMenuItem>Register</DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
          {/* Icons */}
          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <FiShoppingCart className="text-xl" />
            </Button>
          </Link>

          <Button variant="ghost" size="icon">
            <FaRegHeart className="text-xl" />
          </Button>

          {/* Theme Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white dark:bg-zinc-900 shadow-lg border border-border rounded-md"
            >
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Menu For Mobile */}
          <Button
            variant="ghost"
            className="block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RiMenu3Fill />
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 py-3 pb-4 flex flex-col gap-2 animate-in slide-in-from-top-2 fade-in duration-200 shadow-sm border-t border-border">
          <div className="flex flex-col gap-1">
            <div className="px-3 py-1 text-sm font-semibold text-muted-foreground">
              Categories
            </div>
            {categories.map((category) => (
              <Button
                key={category.title}
                variant="ghost"
                className="justify-start px-3 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                <Link to={category.href} className="flex flex-col w-full">
                  <span className="text-base font-medium text-zinc-900 dark:text-white">
                    {category.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {category.description}
                  </span>
                </Link>
              </Button>
            ))}
          </div>

          <hr className="my-2" />

          <div className="flex flex-col gap-1">
            <div className="px-3 py-1 text-sm font-semibold text-muted-foreground">
              My Account
            </div>

            {user ? (
              <Button
                variant="ghost"
                className="justify-start px-3 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/my-account" className="flex flex-col w-full">
                  <span className="text-base font-medium text-zinc-900 dark:text-white">
                    My Account
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Access your orders, wishlist, and more.
                  </span>
                </Link>
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  className="justify-start px-3 w-full text-left"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/login" className="flex flex-col w-full">
                    <span className="text-base font-medium text-zinc-900 dark:text-white">
                      Login
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Access your orders, wishlist, and more.
                    </span>
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  className="justify-start px-3 w-full text-left"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/register" className="flex flex-col w-full">
                    <span className="text-base font-medium text-zinc-900 dark:text-white">
                      Register
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Create a new account to start shopping.
                    </span>
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
