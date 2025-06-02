import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
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
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const isAdmin = user?.role === 'admin';
  const navigate = useNavigate();

  // Navigation items with corresponding admin pages
  const navItems = [
    { label: "Home", path: "/", adminPath: "/admin" },
    { label: "Workout Plans", path: "/workout-plans", adminPath: "/admin/workout-plans" },
    { label: "Nutrition", path: "/nutrition", adminPath: "/admin/products" }, // Maps to products in admin
    { label: "Trainers", path: "/trainers", adminPath: "/admin/users" }, // Maps to users in admin
    { label: "Shop", path: "/shop", adminPath: "/admin/products" },
    { label: "About", path: "/about", adminPath: "/admin" },
    { label: "Contact", path: "/contact", adminPath: "/admin/contact-messages" },
  ];

  // Handle navigation click based on user role
  const handleNavClick = (item, event) => {
    event.preventDefault();
    if (isAdmin) {
      navigate(item.adminPath);
    } else {
      navigate(item.path);
    }
    window.scrollTo(0, 0);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-gymmawy-black/95 backdrop-blur supports-[backdrop-filter]:bg-gymmawy-black/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-extrabold uppercase tracking-wider text-primary">TAGHYEER</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-gymmawy-white transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/workout-plans" className="text-sm font-medium text-gymmawy-white transition-colors hover:text-primary">
              Workout Plans
            </Link>
            <Link to="/nutrition" className="text-sm font-medium text-gymmawy-white transition-colors hover:text-primary">
              Nutrition
            </Link>
            <Link to="/trainers" className="text-sm font-medium text-gymmawy-white transition-colors hover:text-primary">
              Trainers
            </Link>
            <Link to="/shop" className="text-sm font-medium text-gymmawy-white transition-colors hover:text-primary">
              Shop
            </Link>
            <Link to="/memberships" className="text-sm font-medium text-gymmawy-white transition-colors hover:text-primary">
              Memberships
            </Link>
          </nav>

          {/* User Menu or Login/Register Buttons */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">
                      <FiUser className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  {user.role === "admin" && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin">
                        <FiSettings className="mr-2 h-4 w-4" />
                        <span>Admin Panel</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-red-600">
                  <FiLogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
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
                      <a
                        href={isAdmin ? item.adminPath : item.path}
                        className="text-base font-semibold uppercase tracking-wider transition-colors hover:text-primary"
                        onClick={(e) => handleNavClick(item, e)}
                      >
                        {item.label}
                      </a>
                    </div>
                  ))}
                  {isAdmin && (
                    <>
                      <div className="mt-4 border-t border-gymmawy-gray/20 pt-4">
                        <p className="text-sm font-medium text-primary">Admin</p>
                        <Link
                          to="/admin/users"
                          className="mt-2 block text-base transition-colors hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Users
                        </Link>
                        <Link
                          to="/admin/workout-plans"
                          className="mt-2 block text-base transition-colors hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Workout Plans
                        </Link>
                        <Link
                          to="/admin/products"
                          className="mt-2 block text-base transition-colors hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Products
                        </Link>
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
