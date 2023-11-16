import image30 from "../images/image30.png";
import icongoogle from "../icons/icon1.png";
import iconface from "../icons/facebook.png";
import iconapp from "../icons/apple.png";


export default function Login() {
  return (
    <>
      <div class="flex bg-white w-1/2 sm:mx-auto ml-10 ">
        <div class="flex items-center ">
          <img src={image30} alt="Example" class="hidden lg:block" />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50 rounded-2xl	">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h6>LET'S GET YOU STARTED</h6>
            <h2 className="mt-3  text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create an Account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
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
                <a
                  href="#"
                  className="font-semibold text-black w-full  leading-6 hover:text-indigo-500 underline underline-offset-4"
                >
                  Sign Up Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
