import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import i1 from "../assets/images/google.png";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      toast("😕 All fields are required.", {
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
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("jwt", data.token);
        toast.success("🎉 Signed up successfully!", {
          autoClose: 200,
          onClose: () => navigate("/dashboard"),
        });
      } else {
        console.log(data);
        toast(data.message || "Failed to create account.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
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
    handleGoogleCallback();
  }, []);

  return (
    <main className="flex-grow">
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12">
              <h2 className="mt-6 text-3xl font-bold">Sign up for free 🤗</h2>
            </div>

            <div className="max-w-md mx-auto bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button
                      onClick={handleGoogle}
                      className="btn px-0 text-white bg-gray-50 hover:bg-gray-100 w-full relative flex items-center border border-gray-300"
                      disabled={googleLoading}
                    >
                      {googleLoading ? (
                        <span className="flex justify-center items-center w-full">
                          <svg
                            className="animate-spin h-5 w-5 mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 4V1l-4 4 4 4V6c4.418 0 8 3.582 8 8h-3a5.978 5.978 0 0 0-2-4.745V12h-4v6h5.586l1.707-1.707A8.013 8.013 0 0 0 20 12h2c0-5.522-4.478-10-10-10z" />
                          </svg>
                          Redirecting...
                        </span>
                      ) : (
                        <>
                          <img
                            className="mx-4 h-5 w-5 object-contain"
                            src={i1}
                            alt="Google logo"
                          />
                          <span
                            className="h-6 flex items-center border-r border-gray-300 mr-4"
                            aria-hidden="true"
                          ></span>
                          <span className="flex-auto pl-16 pr-8 -ml-16 text-gray-600">
                            Sign up with Google
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center my-6">
                <div
                  className="border-t border-gray-500 dark:border-gray-300 border-dotted flex-grow mr-3"
                  aria-hidden="true"
                ></div>
                <div className="text-gray-500 dark:text-gray-400">
                  Or, register with your email
                </div>
                <div
                  className="border-t border-gray-500 dark:border-gray-300 border-dotted flex-grow ml-3"
                  aria-hidden="true"
                ></div>
              </div>

              <form
                onSubmit={handleSubmit}
                method="post"
                noValidate="novalidate"
              >
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-500 dark:text-gray-300 text-sm font-medium mb-1"
                      htmlFor="fullName"
                    >
                      First name <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="form-input w-full text-gray-600 dark:text-gray-800"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-500 dark:text-gray-300 text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input w-full text-gray-600 dark:text-gray-800"
                      placeholder="you@example.com"
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
                      Password <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-input w-full text-gray-600 dark:text-gray-800"
                      placeholder="Password"
                      required
                    />
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
                          Signing up...
                        </span>
                      ) : (
                        "Sign up"
                      )}
                    </button>
                  </div>
                </div>
              </form>

              <div className="text-gray-600 dark:text-gray-400 text-center mt-4 text-sm">
                Already have an account?{" "}
                <Link
                  className="text-purple-600 hover:text-gray-600 dark:hover:text-gray-200"
                  to="/signin"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUp;
