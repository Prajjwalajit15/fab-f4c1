import React, { useState } from 'react';
import Input from './Input';
import Error from './Error';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(validatePassword(value));
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordValid(value === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can’t submit the form');
    }
  };

  return (
    <div className="form">
      <h2>Create an Account</h2>
      <Input
        className="i1"
        type="email"
        value={email}
        onChange={handleEmailChange}
        valid={emailValid}
        errorMessage="Invalid email address"
        label="Email"
      />
      <Input
        className="i2"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        valid={passwordValid}
        errorMessage="Password must be at least 8 characters long"
        label="Password" 
      />
      <Input
        className="i3"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        valid={confirmPasswordValid}
        errorMessage="Passwords do not match"
        label="Confirm Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
