import React, { useState, useEffect } from "react";
import google from "../assets/images/google.png";
import { Link, useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    setGoogleLoading(true);
    window.location.href = "/auth/google";
  };

  const handleGoogleCallback = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("jwt", token);
      toast.success("🎉 Signed in with Google!", {
        autoClose: 200,
        onClose: () => {
          navigate("/dashboard");
        },
      });
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("token")) {
      handleGoogleCallback();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast("😕 Sorry, bad email or password.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return; // Exit the function early to prevent further execution
    }

    setLoading(true);

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("jwt", data.token);
        toast.success("🎉 Signed in!", {
          autoClose: 200,
          onClose: () => navigate("/dashboard"),
        });
      } else {
        toast.error(data.message || "Bad email or password");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-grow">
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none"></div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-sm mx-auto text-center pb-12 md:pb-20">
              <h2 className="mt-6 text-3xl font-bold">Welcome back 👋</h2>
            </div>
            <div className="max-w-md mx-auto bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3">
                    <button
                      className={`btn px-0 text-white bg-gray-50 hover:bg-gray-100 w-full relative flex items-center border border-gray-300 ${
                        googleLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      onClick={handleGoogleLogin}
                      disabled={googleLoading}
                    >
                      {googleLoading ? (
                        <span className="flex justify-center items-center">
                          <svg
                            className="animate-spin h-5 w-5 mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 4V1l-4 4 4 4V6c4.418 0 8 3.582 8 8h-3a5.978 5.978 0 0 0-2-4.745V12h-4v6h5.586l1.707-1.707A8.013 8.013 0 0 0 20 12h2c0-5.522-4.478-10-10-10z" />
                          </svg>
                          Signing in with Google...
                        </span>
                      ) : (
                        <>
                          <img
                            src={google}
                            className="mx-4 h-5 w-5 object-contain"
                            alt="Google"
                          />
                          <span className="h-6 flex items-center border-r border-gray-300 mr-4"></span>
                          <span className="flex-auto pl-16 pr-8 -ml-16 text-gray-600">
                            Sign in with Google
                          </span>
                        </>
                      )}
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

              <form
                onSubmit={handleSubmit}
                noValidate="novalidate"
                method="post"
              >
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
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
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
                      className={`btn text-white bg-purple-600 hover:bg-purple-700 w-full relative ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex justify-center items-center">
                          <svg
                            className="animate-spin h-5 w-5 mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 4V1l-4 4 4 4V6c4.418 0 8 3.582 8 8h-3a5.978 5.978 0 0 0-2-4.745V12h-4v6h5.586l1.707-1.707A8.013 8.013 0 0 0 20 12h2c0-5.522-4.478-10-10-10z" />
                          </svg>
                          Signing in...
                        </span>
                      ) : (
                        "Sign In"
                      )}
                    </button>
                  </div>
                </div>
              </form>

              <div className="text-gray-600 dark:text-gray-400 text-center mt-6">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-purple-600 hover:text-purple-700 transition duration-150 ease-in-out"
                >
                  Sign Up
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
