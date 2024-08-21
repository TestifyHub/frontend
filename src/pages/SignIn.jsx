import React from "react";
import google from "../assets/images/google.png";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <main className="flex-grow">
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none"></div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-sm mx-auto text-center pb-12 md:pb-20">
              <h2 className="mt-6 text-3xl font-extrabold">Welcome back 👋</h2>
            </div>
            <div className="max-w-md mx-auto bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3">
                    <button className="btn px-0 text-white bg-gray-50 hover:bg-gray-100 w-full relative flex items-center border border-gray-300">
                      <img
                        src={google}
                        className="mx-4 h-5 w-5 object-contain"
                      ></img>
                      <span className="h-6 flex items-center border-r border-gray-300 mr-4"></span>
                      <span className="flex-auto pl-16 pr-8 -ml-16 text-gray-600">
                        Sign in with Google
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center my-6">
                <div className="border-t border-gray-500 dark:border-gray-300 border-dotted flex-grow mr-3"></div>
                <div className="text-gray-500 dark:text-gray-400">
                  Or, sign in with your email
                </div>
                <div className="border-t border-gray-500 dark:border-gray-300 border-dotted flex-grow ml-3"></div>
              </div>

              <form method="post">
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-500 dark:text-gray-300 text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input w-full text-gray-600 dark:text-gray-800"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-500 dark:text-gray-300 text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="form-input w-full text-gray-600 dark:text-gray-800"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <div className="flex">
                      <a
                        className="text-purple-600 hover:text-gray-600 dark:hover:text-gray-200 transition duration-150 ease-in-out text-sm"
                        href="/reset-password"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button
                      className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </form>

              <div className="text-gray-600 dark:text-gray-400 text-center mt-4 text-sm">
                Don't have an account?{" "}
                <Link
                  className="text-purple-600 hover:text-gray-600 dark:hover:text-gray-200 transition duration-150 ease-in-out"
                  to="/signup"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignIn;
