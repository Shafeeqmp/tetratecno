"use client";
import { useState } from "react";
import { Label, TextInput, Checkbox, Button, Card } from "flowbite-react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black px-4">
      <Card className="w-full max-w-md shadow-lg bg-white/10 backdrop-blur-md border border-gray-700 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>

        <form className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <Label htmlFor="name" className="text-white">
              Full Name
            </Label>
            <TextInput id="name" placeholder="John Doe" required />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <TextInput id="email" type="email" placeholder="john@example.com" required />
          </div>

          {/* Password */}
          <div className="relative">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <TextInput
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              className="pr-10" // Add padding for the eye icon
            />
            <button
              type="button"
              className="absolute right-3 top-[38px] text-gray-400 hover:text-white"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <HiEyeOff className="h-5 w-5" /> : <HiEye className="h-5 w-5" />}
            </button>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-gray-300 text-sm">
              I agree to the{" "}
              <a href="#" className="underline text-blue-400 hover:text-blue-500">
                Terms & Conditions
              </a>
            </Label>
          </div>

          {/* Submit - Using standard color prop instead of gradient */}
          <Button 
            color="purple" 
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            Sign Up
          </Button>
        </form>

        {/* Already have account */}
        <p className="text-sm text-center text-gray-300 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}