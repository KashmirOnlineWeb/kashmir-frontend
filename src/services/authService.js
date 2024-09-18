/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// SignUP Api
// @ts-ignore
export const signUpApi = async (data) => {
  // eslint-disable-next-line no-return-await
  return await axios
    .post(`${process.env.NEXT_PUBLIC_CLERK_API_URL}api/v1/users/signup`, data)
    .then((response) => response.data)
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('err ', err.response);
    });
};

// Signin (Login) Api
// @ts-ignore
export const signinApi = async (data) => {
  localStorage.setItem('','error')
  // eslint-disable-next-line no-return-await
  return await axios
    .post(`${process.env.NEXT_PUBLIC_CLERK_API_URL}api/v1/users/login`, data)
    .then((response) => response.data)
    .catch((err) => {
      console.log('err ', err.response);
      localStorage.setItem('error',err?.response?.data?.message)
    });
};

// Check/verify email Api
export const checkEmail = async (email) => {
  localStorage.setItem('','error')
  // eslint-disable-next-line no-return-await
  return await axios
    .post(`${process.env.NEXT_PUBLIC_CLERK_API_URL}api/v1/users/check-email`, {
      email,
    })
    .then((response) => response.data)
    .catch((err) => {
      console.log('err', err.response);
      localStorage.setItem('error',err?.response?.data?.message)
    });
};
