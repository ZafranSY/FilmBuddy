import React, { useState } from "react";
import { FaEyeSlash, FaEye, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IconType } from "react-icons";

import { supabase } from "../client";

// Fixed IconWrapper component
const IconWrapper: React.FC<{ icon: IconType; size?: number; className?: string }> = ({ 
  icon: Icon, 
  size, 
  className 
}) => {
  // Cast the Icon component to a React component that returns ReactElement
  return React.createElement(Icon as React.ComponentType<{ size?: number; className?: string }>, { 
    size, 
    className 
  });
};

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    email: "", 
    password: "",
    condfirmpassword:""
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setError(""); // Clear error on input change

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      };
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); 

    try {
        console.log(formData); // Implement login logic here

        if (!formData.email || !formData.password) {
            setError("Email and password are required.");
            return;
          }
          
          if (formData.password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
          }
          
          
            const {data, error} = await supabase.auth.signUp({
                email:formData.email,
                password : formData.password,
               
            })
            if (error) {
                console.error(error);
                setError(error.message); // Display server error message
                return;
              }
              console.log("Sign up successful:", data);
              setError(""); // Clear error on success
    } catch (err) {
        console.error("Unexpected error:", err);
    setError("An unexpected error occurred.");
    }
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-4 ">
        

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-md w-full p-5">
            {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Create an account

        </h1>
          <form onSubmit={handleSubmit}>
             
            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-600 text-base font-normal"
                placeholder=""
              />
            </div>
          {/* password Field */}
          <div className="mb-3">
  {/* Label is OUTSIDE the relative container */}
  <label
    htmlFor="password"
    className="block text-sm font-medium text-gray-700 mb-2"
  >
    Password
  </label>

  {/* Make only the input-wrapper relative */}
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      id="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 focus:border-blue-500 text-gray-600 text-base font-normal"
      placeholder=""
    />
    <button
      type="button"
      onClick={togglePasswordVisibility}
      /* Absolutely position this button inside the .relative container */
      className="absolute inset-y-0 right-3 flex items-center 
                 text-gray-500 hover:text-gray-700"
    >
      {showPassword ? (
        <IconWrapper icon={FaEyeSlash} size={20} />
      ) : (
        <IconWrapper icon={FaEye} size={20} />
      )}
    </button>
  </div>
</div>

<div className="mb-3">
  <label
    htmlFor="condfirmpassword"
    className="block text-sm font-medium text-gray-700 mb-2"
  >
    Confirm Password
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      id="condfirmpassword"
      name="condfirmpassword"
      value={formData.condfirmpassword}
      onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 focus:border-blue-500 text-gray-600 text-base font-normal"
      placeholder=""
    />
    <button
      type="button"
      onClick={togglePasswordVisibility}
      className="absolute inset-y-0 right-3 flex items-center 
                 text-gray-500 hover:text-gray-700"
    >
      {showPassword ? (
        <IconWrapper icon={FaEyeSlash} size={20} />
      ) : (
        <IconWrapper icon={FaEye} size={20} />
      )}
    </button>
  </div>
</div>

            
            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mb-6s">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                Forgot password?
              </a>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 text-base px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
            >
              Sign in
            </button>

            {/* Already have an account? */}
            <div className="mt-1 text-center">
              <span className="text-sm text-gray-600  mb-6">
                 Already have an account?{" "}
                <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                  Sign In
                </a>
              </span>
            </div>

            {/* Divider */}
            <div className="relative flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-600 text-sm">Or continue with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 text-gray-700"
              >
                <IconWrapper icon={FcGoogle} className="w-5 h-5" />
                <span className="text-sm font-medium">Google</span>
              </button>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default SignupPage;