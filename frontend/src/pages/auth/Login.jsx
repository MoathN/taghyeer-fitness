import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axiosInstance from '@/utils/axios';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Form schema
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useOutletContext();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Login function with API call
  const handleLogin = async (values) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axiosInstance.post("/api/auth/login", {
        email: values.email,
        password: values.password,
      });
      
      if (response.data && response.data.success) {
        const userData = response.data.user;
        const token = response.data.token;
        
        // Show success message
        toast.success("Login successful!");
        
        // Store user data and token
        localStorage.setItem('taghyeerUser', JSON.stringify(userData));
        localStorage.setItem('taghyeerToken', token);
        
        // Configure axios defaults for future requests
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        // Log in the user
        login(userData, token);
        
        // For admin users, redirect to admin panel
        if (userData.role === "admin") {
          navigate("/admin/users");
        } else {
          // If it's a regular user, redirect to their dashboard
          navigate("/dashboard");
          
          // If the user is an admin viewing the system, offer to view admin panel
          if (window.location.href.includes("admin")) {
            toast.info("Go to admin panel?", {
              action: {
                label: "View Admin Panel",
                onClick: () => navigate("/admin/users")
              }
            });
          }
        }
      } else {
        setErrorMessage(response.data?.message || "Login failed");
        toast.error(response.data?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      
      if (error.response?.status === 401) {
        setErrorMessage("Invalid email or password");
        toast.error("Invalid email or password");
      } else if (error.response?.status === 404) {
        setErrorMessage("User not found");
        toast.error("User not found");
      } else {
        setErrorMessage("Login failed. Please try again later.");
        toast.error(error.response?.data?.message || "Login failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container my-12 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md">
              {errorMessage}
            </div>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Link
                  to="/auth/reset-password"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Forgot your password?
                </Link>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center border-t px-6 py-4">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
