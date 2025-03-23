"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import API_URLS from "../../config/urls.js";
import { toast } from "react-toastify";

export default function AuthModal({ triggerText }: { triggerText?: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Default to Signup first

  // Login Form State
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);

  // Handle Signup
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true);
    setError("");

    try {
      const formData = { username, email, password, firstName, lastName };
      const response = await axios.post(API_URLS.REGISTER, formData);

      localStorage.setItem("username", response.data.username);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("firstName", response.data.firstName);
      localStorage.setItem("lastName", response.data.lastName);

      if (response.data.profilePictureUrl) {
        localStorage.setItem("profilePicture", response.data.profilePictureUrl);
      }

      toast.success("Account Created Successfully");
      setOpen(false);
      router.push("/dashboard");
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.message || "An error occurred. Try again."
          : "An unexpected error occurred."
      );
    } finally {
      setLoad(false);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true);
    setError("");

    try {
      const response = await axios.post(API_URLS.LOGIN, {
        email: loginEmail,
        password: loginPassword,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("userId", response.data.userId);

      toast.success("Login Successful");

      // Clear the form fields
      setLoginEmail("");
      setLoginPassword("");

      setOpen(false);
      router.push("/dashboard");
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.message || "Login failed. Try again."
          : "An unexpected error occurred."
      );
    } finally {
      setLoad(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerText ? (
          <span className="text-primary cursor-pointer hover:underline">
            {triggerText}
          </span>
        ) : (
          <Button className="px-6 py-2 bg-primary text-white rounded-lg">
            {isLogin ? "Log In" : "Log In"}
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-md p-6 bg-gray-900 text-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {isLogin ? "Welcome Back" : "Create an Account"}
          </DialogTitle>
        </DialogHeader>

        {/* Signup Form */}
        {!isLogin && (
          <form onSubmit={handleSignup} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="johndoe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                I agree with Terms & Conditions
              </Label>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-primary text-white"
              disabled={load}
            >
              {load ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
        )}

        {/* Login Form */}
        {isLogin && (
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="loginEmail">Email</Label>
              <Input
                id="loginEmail"
                type="email"
                placeholder="m@example.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="loginPassword">Password</Label>
              <Input
                id="loginPassword"
                type="password"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-primary text-white"
              disabled={load}
            >
              {load ? "Logging In..." : "Log In"}
            </Button>
          </form>
        )}

        <div className="mt-4 text-center text-sm">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <span
                className="text-primary cursor-pointer hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Sign up here
              </span>
              <div className="mt-2 text-center text-sm">
                <span
                  className="text-primary cursor-pointer hover:underline"
                  onClick={() => {
                    setOpen(false); // Close the modal
                    router.push("/forgot-password"); // Navigate to Forgot Password page
                  }}
                >
                  Forgot Password?
                </span>
              </div>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-primary cursor-pointer hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Log in here
              </span>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
