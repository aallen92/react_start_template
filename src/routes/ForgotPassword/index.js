import React, { useState } from "react";
import Button from "../../components/ui/Button";
import TextField from "../../components/ui/TextField";

function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  const forgotPasswordHandler = () => {
    console.log("Forgot Password Handled");
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
        <Button
          label='Reset Password'
          onClick={() => forgotPasswordHandler()}
        />
      </div>
      <p className='mt-4'>
        Return to{" "}
        <a href='/' className='text-blue-500 underline'>
          Sign In
        </a>
      </p>
    </div>
  );
}

export default ForgotPasswordScreen;
