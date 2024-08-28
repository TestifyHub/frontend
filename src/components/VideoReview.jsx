import React from "react";
import StarRating from "./StarRating";
import { format } from "date-fns";

function VideoReview({ review, handleLike }) {
  const posterUrl = review.video
    .replace("/upload/", "/upload/so_0/")
    .replace(".mp4", ".jpg");
  return (
    <div className="collapsible mb-4 border shadow-lg border-gray-200 bg-white dark:bg-gray-700 rounded-lg dark:border-gray-800 2xl:w-3/4 2xl:mx-auto">
      <div className="block focus:outline-none transition duration-150 ease-in-out hover:cursor-pointer w-full">
        <div className="px-4 pt-4 sm:px-6">
          <div className="items-center">
            <div className="flex w-full">
              <div className="relative">
                <span className="px-5 py-1 my-auto inline-flex text-sm leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-600 text-left">
                  Video
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
          </div>
        </div>
        <div className="collapsible text-right">
          <div className="mt-4 mb-2 mx-6 text-left">
            {/* Star Rating */}
            <StarRating rating={review.rating} />
          </div>
          <div className="mt-5 text-left focus:outline-none w-full">
            <div className="mx-6 mb-4 text-base font-medium">
              <div className="vsc-controller"></div>
              {review.type === "video" && (
                <video
                  disablePictureInPicture
                  controls
                  playsInline
                  poster={posterUrl}
                  className="w-full rounded-lg"
                  preload="auto"
                  style={{ width: "100%", height: "100%", opacity: 0.999 }}
                  src={review.video}
                ></video>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-4 gap-y-1 mt-4 mx-6 mb-5">
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
  );
}

export default VideoReview;
