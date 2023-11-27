// Signup.js

import React, { useState } from 'react';
import image30 from "../images/image30.png";
import icongoogle from "../icons/icon1.png";
import iconface from "../icons/facebook.png";
import iconapp from "../icons/apple.png";
import { Link } from 'react-router-dom';

const Signup = () => {
  const [yourName, setYourName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!yourName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Perform signup logic here, e.g., make an API request to create a new user
      console.log('Signup successful!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex bg-white w-1/2 sm:mx-auto ml-10 pt-10 ">
        <div className="flex items-center ">
          <img src={image30} alt="Example" className="hidden lg:block" />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50 rounded-2xl	">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h6>LET'S GET YOU STARTED</h6>
            <h2 className="mt-3 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create an Account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSignup}>
              <div>
                <label
                  htmlFor="yourName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Your Name
                </label>
                <div className="mt-2">
                  <input
                    id="yourName"
                    name="yourName"
                    type="text"
                    autoComplete="name"
                    required
                    value={yourName}
                    onChange={(e) => setYourName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-black  py-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  CONTINUE
                </button>
              </div>
            </form>
            <div>
              <button
                className="flex items-center w-full rounded-md border border-black px-16 py-3 text-sm font-medium text-black-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 mt-5 justify-between "
                href="/download"
              >
                <img src={icongoogle} alt="Google Icon" className="mr-2 h-5 w-5" />{" "}
                <p className='mr-14 whitespace-nowrap'>   Sign Up with Google</p>
              </button>
              <button
                className="flex items-center w-full rounded-md border border-black px-16 py-3 text-sm font-medium text-black-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 mt-5 justify-between "
                href="/download"
              >
                <img src={iconface} alt="Facebook Icon" className="mr-2 h-5 w-5" />{" "}
                <p className='mr-14 whitespace-nowrap'>   Sign Up with Facebook</p>
              </button>
              <button
                className="flex items-center w-full rounded-md border border-black px-16 py-3 text-sm font-medium text-black-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 mt-5 justify-between "
                href="/download"
              >
                <img src={iconapp} alt="Apple Icon" className="mr-2 h-5 w-5" />{" "}
                <p className='mr-14 whitespace-nowrap'>   Sign Up with Apple </p>
              </button>
            </div>

            <div>
              <p className="mt-10 text-center text-sm text-gray-500">
                Already have an account?{' '}
                <Link
      to="/login"  // Đặt đường dẫn bạn muốn chuyển hướng tới
      className="font-semibold text-black w-full  leading-6 hover:text-indigo-500 underline underline-offset-4"
    >
      Log In Here
    </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
