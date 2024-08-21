import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import i1 from '../assets/images/google.png';

function SignUp() {
   
    return (
        <main className="flex-grow">
          
            <section className="relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                        <div className="max-w-3xl mx-auto text-center pb-12">
                            <h2 className="mt-6 text-3xl font-bold">Sign up for free 🤗</h2>
                            
                        </div>

                        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <div className="rounded-md w-full mb-4">
                                <div className="relative flex rounded-md items-start">
                                   
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-wrap -mx-3 mt-6">
                                    <div className="w-full px-3">
                                        <button className="btn px-0 text-white bg-gray-50 hover:bg-gray-100 w-full relative flex items-center border border-gray-300">
                                            <img className="mx-4 h-5 w-5 object-contain" src={i1} alt="Google logo" />
                                            <span className="h-6 flex items-center border-r border-gray-300 mr-4" aria-hidden="true"></span>
                                            <span className="flex-auto pl-16 pr-8 -ml-16 text-gray-600">Sign up with Google</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center my-6">
                                <div className="border-t border-gray-500 dark:border-gray-300 border-dotted flex-grow mr-3" aria-hidden="true"></div>
                                <div className="text-gray-500 dark:text-gray-400">Or, register with your email</div>
                                <div className="border-t border-gray-500 dark:border-gray-300 border-dotted flex-grow ml-3" aria-hidden="true"></div>
                            </div>

                            <form method="post">
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                        <label className="block text-gray-500 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="name">
                                            First name <span className="text-red-600">*</span>
                                        </label>
                                        <input 
                                            name="name" 
                                            type="text" 
                                            className="form-input w-full text-gray-600 dark:text-gray-800" 
                                            placeholder="Your first name" 
                                            required 
                                           
                                            
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                        <label className="block text-gray-500 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="email">
                                            Email <span className="text-red-600">*</span>
                                        </label>
                                        <input 
                                            name="email" 
                                            type="email" 
                                            className="form-input w-full text-gray-600 dark:text-gray-800" 
                                            placeholder="you@example.com" 
                                            required 
                                           
                                            
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                        <label className="block text-gray-500 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="password">
                                            Password <span className="text-red-600">*</span>
                                        </label>
                                        <input 
                                            name="password" 
                                            type="password" 
                                            className="form-input w-full text-gray-600 dark:text-gray-800" 
                                            placeholder="Password" 
                                            required 
                                            
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mt-6">
                                    <div className="w-full px-3">
                                        <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" type="submit">Sign up</button>
                                    </div>
                                </div>
                            </form>

                            <div className="text-gray-600 dark:text-gray-400 text-center mt-4 text-sm">
                                Already have an account? 
                                <Link className="text-purple-600 hover:text-gray-600 dark:hover:text-gray-200 transition duration-150 ease-in-out" to="/signin">
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
