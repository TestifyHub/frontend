import React from 'react'

function GetStarted() {
  return (
    <section className="bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-gray-200">Ready to collect testimonials?</h1>
            <p className="text-xl text-gray-400 mb-8">
              We are loved by Fortune 500 companies, early-stage startups, marketing agencies, real estate agents, freelancers, and many more. Your customers' testimonials are the best social proof you can get! Get started now 👇
            </p>
            <ul role="list" className="my-8 space-y-5 font-semibold lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
              <li className="flex justify-center lg:justify-end lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-green-500">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-200">No coding skill required.</p>
              </li>
              <li className="flex justify-center lg:justify-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-green-500">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-200">Start in under 2 minutes.</p>
              </li>
            </ul>
            <div className="flex justify-center mb-8">
              <div>
                <div className="sm:flex sm:gap-4">
                  <a className="btn text-white font-bold bg-purple-600 hover:bg-purple-700 rounded-md transform hover:scale-105" href="/signup">Get started for FREE</a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted