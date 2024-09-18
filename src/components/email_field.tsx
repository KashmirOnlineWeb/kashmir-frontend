/* eslint-disable prefer-regex-literals */
// A custom hook to validate email or phone number
import { useState } from 'react';

const EmailField = (_value: any) => {
  // Define the regex patterns for email and phone number
  const emailRegex = new RegExp(
    '/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}/',
  );
  const phoneRegex = new RegExp('/^d{10}$/');

  // Initialize the state variables
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  // Validate the input value
  const validate = (value: any) => {
    // Check if the value is empty
    if (!value) {
      setIsValid(false);
      setMessage('Please enter an email or phone number');
    }
    // Check if the value matches the email regex
    else if (emailRegex.test(value)) {
      setIsValid(true);
      setMessage('Valid email');
    }
    // Check if the value matches the phone regex
    else if (phoneRegex.test(value)) {
      setIsValid(true);
      setMessage('Valid phone number');
    }
    // Otherwise, the value is invalid
    else {
      setIsValid(false);
      setMessage('Invalid email or phone number');
    }
  };

  // Return the state variables and the validate function
  return { isValid, message, validate };
};
export default EmailField;
