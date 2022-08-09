import React, { useState } from "react";
import Button from "../../components/ui/Button";
import TextField from "../../components/ui/TextField";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = () => {
    console.log("Sign In Handler Clicked");
  };

  return (
    <div className='flex flex-col min-h-screen items-center justify-center px-4'>
      <div className='flex flex-col w-full md:w-3/12'>
        <TextField
          label='Email Address'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button label='Sign In' onClick={() => signInHandler()} />
      </div>
      <p className='mt-4'>
        Not a member yet?{" "}
        <a href='/register' className='text-blue-500 underline'>
          Join Now
        </a>
      </p>
      <p className='mt-4'>
        Forgot Password?{" "}
        <a href='/forgot-password' className='text-blue-500 underline'>
          Click Here
        </a>
      </p>
    </div>
  );
}

export default LoginScreen;
