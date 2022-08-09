import React, { useState } from "react";
import Button from "../../components/ui/Button";
import TextField from "../../components/ui/TextField";

function RegisterScreen() {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    setPassword: "",
  });

  const registrationHandler = () => {
    //
  };

  return (
    <div className='flex flex-col min-h-screen items-center justify-center px-4'>
      <div className='flex flex-col w-full md:w-3/12'>
        <TextField
          label='First Name'
          type='text'
          value={newUser.firstName}
          onChange={(e) =>
            setNewUser({ ...newUser, firstName: e.target.value })
          }
        />
        <TextField
          label='Last Name'
          type='text'
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />
        <TextField
          label='Email Address'
          type='email'
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <TextField
          label='Password'
          type='password'
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <Button label='Join' onClick={() => registrationHandler()} />
      </div>
      <p className='mt-4'>
        Already got an account?{" "}
        <a href='/' className='text-blue-500 underline'>
          Sign In
        </a>
      </p>
    </div>
  );
}

export default RegisterScreen;
