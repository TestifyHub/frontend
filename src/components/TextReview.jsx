import React from "react";
import StarRating from "./StarRating";
import { format } from "date-fns";

function TextReview({ review, handleLike }) {
  return (
    <div className="collapsible mb-4 hover:bg-purple-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition ease-in-out duration-150 rounded-lg dark:border-gray-800 2xl:w-3/4 2xl:mx-auto">
      <div className="block focus:outline-none transition duration-150 ease-in-out hover:cursor-pointer w-full">
        <div className="px-4 py-4 sm:px-6">
          <div className="items-center">
            <div className="flex w-full">
              <div className="relative">
                <span className="px-5 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-blue-100 text-blue-600 text-left">
                  Text
                </span>
              </div>
              <div className="flex mt-2 ml-auto leading-5 sm:mt-0">
                <button
                  onClick={() => {
                    handleLike(review._id);
                  }}
                  className="focus:outline-none"
                >
                  {review.liked ? (
                    <svg
                      className="w-6 h-6 text-red-600 hover:text-red-400 dark:text-red-400 dark:hover:text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-red-600 hover:text-red-400 dark:text-red-400 dark:hover:text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="text-base font-medium text-gray-900 text-left">
              <div className="mt-4 mb-2 text-left">
                <StarRating rating={review.rating} />
              </div>
              <div className="text-sm font-normal text-left cursor-pointer text-gray-400 dark:text-gray-300">
                <p>{review.text}</p>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-4">
                <div className="col-span-1 cursor-pointer">
                  <div>
                    <img
                      loading="lazy"
                      src={review.image}
                      className="rounded-lg hover:opacity-75"
                      alt="thumbnail"
                    />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-x-4 gap-y-1 mt-4">
                <div className="ml-0 text-sm text-left">
                  <p className="text-gray-400 font-semibold dark:text-gray-300 capitalize">
                    Name
                  </p>
                  <div className="flex">
                    <p className="my-auto break-words font-medium text-gray-600 dark:text-gray-200">
                      {review.name}
                    </p>
                  </div>
                </div>
                {review.createdAt && (
                  <div className="ml-0 text-sm text-left">
                    <p className="text-gray-400 font-semibold dark:text-gray-300 capitalize">
                      Submitted at
                    </p>
                    <p className="break-words font-medium text-gray-600 dark:text-gray-200">
                      {format(
                        new Date(review.createdAt),
                        "MMM dd, yyyy, h:mm:ss a"
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextReview;
