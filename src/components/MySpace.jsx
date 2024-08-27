import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function MySpace({ spaceId, spaceName }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchReviews = async () => {
      let api = "";
      switch (filter) {
        case "video":
          api = `/api/reviews/${spaceId}/video`;
          break;
        case "text":
          api = `/api/reviews/${spaceId}/text`;
          break;
        case "liked":
          api = `/api/reviews/${spaceId}/liked`;
          break;
        default:
          api = `/api/reviews/${spaceId}`;
      }
      const response = await fetch(api);

      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews);
      }
    };

    fetchReviews();
  }, []);

  const handleLike = async (reviewId) => {
    try {
      const response = await fetch(`/api/reviews/${reviewId}/like`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setReviews(
        reviews.map((review) =>
          review._id === reviewId ? { ...review, liked: !review.liked } : review
        )
      );
    } catch (error) {
      toast.error("Internal server error");
    }
  };

  // Function to toggle modal visibility
  const handleToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div>
        <header className="bg-gray-50 dark:bg-gray-900 py-8 mt-20 border-b border-gray-50 dark:border-gray-800">
          <div className="mx-4 md:mx-auto container lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex justify-center sm:justify-start ml-5">
                <img
                  className="rounded-lg w-auto h-16 mr-5 border border-gray-200 dark:border-gray-800 mt-3"
                  src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/spaces%2Fkushal%2Flogo?alt=media&amp;token=34103136-b038-4a44-b2be-d17fc7eb1112"
                />

                <div className="flex flex-col">
                  <h1 className="mt-2 text-2xl font-bold leading-7  sm:text-3xl sm:tracking-tight">
                    {spaceName}
                    <div className="relative inline-block text-left">
                      <div>
                        <button
                          className="flex items-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-100"
                          id="headlessui-menu-button-33"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Open options</span>
                        </button>
                      </div>
                    </div>
                  </h1>
                  <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-8">
                    <div className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex">
                        <p className="mr-1">Space public URL:</p>
                        <a
                          href={`http://localhost:5173/submitreview/${spaceId}`}
                          target="_blank"
                          className="underline break-words"
                        >
                          {`http://localhost:5173/submitreview/${spaceId}`}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex justify-center sm:justify-start mt-4 lg:my-auto xl:ml-4">
              <span className="block">
                <div className="flex flex-col"></div>
              </span>
              <span className="pl-10 block">
                <div className="flex flex-col"></div>
              </span>
              <span className="pl-10 block"></span>
            </div>
          </div>
        </header>
      </div>

      <main className="flex-grow">
        <div className="container mx-auto dashboard-container pb-20">
          <div className="grid md:grid-cols-12 sm:grid-cols-1">
            <div className="overflow-hidden mx-4 col-span-12 md:col-span-4 2xl:col-span-3">
              {isModalOpen && (
                <div className="fixed z-40 inset-0 overflow-y-auto">
                  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                      className="fixed inset-0 transition-opacity"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>

                      <div
                        className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                      >
                        <button
                          className="text-gray-400 rounded-full w-6 h-6"
                          style={{
                            position: "absolute",
                            right: "5px",
                            top: "5px",
                            zIndex: "999",
                            outline: "none",
                          }}
                          onClick={handleToggle}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        </button>

                        <section className="relative">
                          <div className="w-full mx-auto px-4 sm:px-6 relative">
                            <div className="py-6">
                              <div className="w-full mx-auto text-center text-gray-800">
                                <h3 className="h3 mb-4">
                                  Embed a Wall of Love
                                </h3>
                              </div>
                              <div className="max-w-4xl mx-auto">
                                <p className="text-base font-medium w-full text-gray-800 text-center mb-4">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium bg-purple-100 text-purple-800 mr-2">
                                    Step 1
                                  </span>
                                  Choose a layout
                                </p>

                                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                                  <li className="col-span-1 flex flex-col text-center bg-white rounded-lg border-gray-300 border  hover:shadow-lg divide-y divide-gray-200 cursor-pointer">
                                    <div className="flex-1 flex flex-col justify-between">
                                      <img
                                        className="w-full flex-shrink-0 border-none my-auto rounded-lg"
                                        src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fanimated-demo.gif?alt=media&amp;token=08b0e0d6-5290-4441-a309-942e074c7b77"
                                        alt="auto scrolling masonry grid"
                                      ></img>

                                      <h3 className="my-3 text-gray-900 text-base font-semibold">
                                        Masonry - animated
                                      </h3>
                                    </div>
                                  </li>
                                  <li className="col-span-1 flex flex-col text-center bg-white rounded-lg border-gray-300 border  hover:shadow-lg divide-y divide-gray-200 cursor-pointer">
                                    <div className="flex-1 flex flex-col justify-between">
                                      <img
                                        className="w-full flex-shrink-0 border-none my-auto rounded-lg"
                                        src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffixed-masonry-grid.png?alt=media&amp;token=c75b8785-344a-4bd8-96dd-79592466d78e"
                                        alt="Fixed masonry grid"
                                      />

                                      <h3 className="my-3 text-gray-900 text-base font-semibold">
                                        Masonry - fixed
                                      </h3>
                                    </div>
                                  </li>
                                  <li className="col-span-1 flex flex-col text-center bg-white rounded-lg border-gray-300 border  hover:shadow-lg divide-y divide-gray-200 cursor-pointer">
                                    <div className="flex-1 flex flex-col justify-between">
                                      <img
                                        className="w-full flex-shrink-0 border-none my-auto rounded-lg"
                                        src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fcarousel-animated.gif?alt=media&amp;token=7a42bb1a-0b98-45e9-acbf-37f8a9f36a4e"
                                        alt="Fixed masonry grid"
                                      />
                                      <h3 className="my-3 text-gray-900 text-base font-semibold">
                                        Carousel slider
                                      </h3>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <p className="text-base w-full text-gray-600 text-center mt-4">
                                Check out our{" "}
                                <a
                                  className="underline"
                                  href="https://help.testimonial.to/en/articles/6223121-embed-a-wall-of-love"
                                  target="_blank"
                                >
                                  Wall of Love embed guide
                                </a>{" "}
                                for more help.
                              </p>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <nav className="sm:w-full ml-auto mt-10">
                <div>
                  <h1 className="mx-2 my-2 uppercase text-gray-400 dark:text-gray-300 text-base font-bold">
                    Inbox
                  </h1>
                  <button
                    className="w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 hover:text-gray-600 hover:bg-purple-100 dark:text-white rounded-md dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none transition ease-in-out duration-150 bg-purple-100 dark:text-white dark:bg-gray-800 focus:outline-none"
                    aria-current="page"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="circle"
                      className="h-2 w-2 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#927fbf"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                      ></path>
                    </svg>
                    All
                  </button>
                  <button className="w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 hover:text-gray-600 hover:bg-yellow-100 dark:text-white rounded-md dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none transition ease-in-out duration-150 ">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="circle"
                      className="h-2 w-2 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#f6ad55"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                      ></path>
                    </svg>
                    Video
                  </button>
                  <button className="w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 hover:text-gray-600 hover:bg-blue-100 dark:text-white rounded-md dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none transition ease-in-out duration-150 ">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="circle"
                      className="h-2 w-2 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#1da1f2"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                      ></path>
                    </svg>
                    Text
                  </button>

                  <button className="w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 hover:text-gray-600 hover:bg-red-100 dark:text-white rounded-md dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none transition ease-in-out duration-150 ">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="circle"
                      className="h-2 w-2 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#ec625f"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                      ></path>
                    </svg>
                    Liked
                  </button>
                </div>
                <div className="mt-8">
                  <h1 className="mx-2 my-2 uppercase text-gray-400 text-base font-bold">
                    Embeds & Metrics
                  </h1>

                  <button
                    className="w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 hover:text-gray-600 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none transition ease-in-out duration-150"
                    onClick={handleToggle}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      ></path>
                    </svg>
                    <span className="text-left">Wall of Love</span>
                  </button>
                  <button className="w-full mt-1 group flex items-center px-3 py-2 text-base text-left leading-5 font-medium text-gray-800 hover:text-gray-600 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none transition ease-in-out duration-150">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                      ></path>
                    </svg>
                    Collecting widget
                  </button>
                </div>
                <div className="mt-8">
                  <h1 className="mx-2 my-2 uppercase text-gray-400 text-base font-bold">
                    Links
                  </h1>
                  <a
                    href="/kushal/all"
                    target="_blank"
                    className="w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 hover:text-gray-600 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none transition ease-in-out duration-150"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      ></path>
                    </svg>
                    Wall of Love page
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MySpace;
