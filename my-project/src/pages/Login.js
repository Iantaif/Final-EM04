import image30 from "../images/image30.png";
import icongoogle from "../icons/icon1.png";
import iconface from "../icons/facebook.png";
import iconapp from "../icons/apple.png";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the form from submitting and page reload

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Perform authentication logic here (e.g., make API request to your server)
    // If successful, navigate to the dashboard or update the UI accordingly
    // If failed, update the error state

    console.log('Login successful!');
  };
  return (
    <>
      <div class="flex bg-white w-1/2 sm:mx-auto ml-10  pt-12">
        <div class="flex items-center ">
          <img src={image30} alt="Example" class="hidden lg:block" />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50 rounded-2xl	">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h6>WELCOME BACK</h6>
            <h2 className="mt-3  text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
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
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>

                <div className="">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}

                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="text-sm flex justify-between">
                  <div class="flex items-center mb-4">
                    <input
                      id="rememberMe"
                      type="checkbox"
                      value=""
                      checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="rememberMe"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                     
                  </div>
                  <div class="">
                    <a href="#" className=" font-normal	 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
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
                class="flex items-center w-full rounded-md border border-black px-16 py-3 text-sm font-medium text-black-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 mt-5 justify-between "
                href="/download"
              >
                <img src={icongoogle} alt="Google Icon" class="mr-2 h-5 w-5" />{" "}
                <p class='mr-14 whitespace-nowrap'>   Login with Google</p>
              </button>
              <button
                class="flex items-center w-full rounded-md border border-black px-16 py-3 text-sm font-medium text-black-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 mt-5 justify-between "
                href="/download"
              >
                <img src={iconface} alt="Google Icon" class="mr-2 h-5 w-5" />{" "}
                <p class='mr-14 whitespace-nowrap'>   Login with facebook</p>
              </button>
              <button
                class="flex items-center w-full rounded-md border border-black px-16 py-3 text-sm font-medium text-black-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 mt-5 justify-between "
                href="/download"
              >
                <img src={iconapp} alt="Google Icon" class="mr-2 h-5 w-5" />{" "}
                <p class='mr-14 whitespace-nowrap'>   Login with apple </p>
              </button>
              
            </div>

            <div>
              <p className="mt-10 text-center text-sm text-gray-500">
                New User?{" "}
                <Link
      to="/register"  // Đặt đường dẫn bạn muốn chuyển hướng tới
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
}
