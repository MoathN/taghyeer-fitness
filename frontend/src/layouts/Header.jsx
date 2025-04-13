import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ user, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isAdmin = user?.role === 'admin';

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Workout Plans", path: "/workout-plans" },
    { label: "Nutrition", path: "/nutrition" },
    { label: "Trainers", path: "/trainers" },
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gymmawy-gray/10 bg-gymmawy-purple py-3">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl font-extrabold uppercase tracking-wider text-primary">TAGHYEER</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary"
              onClick={() => window.scrollTo(0, 0)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons or User Menu */}
        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8 border border-primary/20">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback className="bg-primary text-white">{user.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 border-primary/20 bg-gymmawy-purple/95" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gymmawy-gray/20" />
                <DropdownMenuItem asChild className="hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary">
                  <Link to="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary">
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary">
                  <Link to="/memberships">My Membership</Link>
                </DropdownMenuItem>
                {isAdmin && (
                  <>
                    <DropdownMenuSeparator className="bg-gymmawy-gray/20" />
                    <DropdownMenuLabel className="font-medium text-xs text-primary">Admin</DropdownMenuLabel>
                    <DropdownMenuItem asChild className="hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary">
                      <Link to="/admin/contact-messages">Contact Messages</Link>
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator className="bg-gymmawy-gray/20" />
                <DropdownMenuItem onClick={onLogout} className="hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex gap-3">
              <Button asChild variant="outline" className="border-primary/30 text-gymmawy-white hover:border-primary hover:bg-primary/10 hover:text-primary">
                <Link to="/auth/login">Login</Link>
              </Button>
              <Button asChild className="bg-primary text-white hover:bg-primary/90">
                <Link to="/auth/register">Sign Up</Link>
              </Button>
            </div>
          )}

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gymmawy-white hover:bg-primary/10 hover:text-primary">
                <FiMenu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l-gymmawy-gray/20 bg-gymmawy-purple">
              <div className="flex flex-col gap-6 py-6">
                <Link
                  to="/"
                  className="flex items-center gap-2 font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-2xl font-extrabold uppercase tracking-wider text-primary">TAGHYEER</span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navItems.map((item, index) => (
                    <div key={index}>
                      <Link
                        to={item.path}
                        className="text-base font-semibold uppercase tracking-wider transition-colors hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                  {isAdmin && (
                    <>
                      <div className="mt-4 border-t border-gymmawy-gray/20 pt-4">
                        <p className="text-sm font-medium text-primary">Admin</p>
                        <Link
                          to="/admin/contact-messages"
                          className="mt-2 block text-base transition-colors hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Contact Messages
                        </Link>
                      </div>
                    </>
                  )}
                  {!user && (
                    <>
                      <Link
                        to="/auth/login"
                        className="mt-4 text-base font-semibold transition-colors hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Button asChild className="mt-2 bg-primary text-white hover:bg-primary/90">
                        <Link to="/auth/register" onClick={() => setIsMobileMenuOpen(false)}>
                          Sign Up
                        </Link>
                      </Button>
                    </>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
