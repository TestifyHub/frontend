import React, { useState } from "react";
import ReactPlayer from "react-player";
import { toast, Bounce } from "react-toastify";

function VideoReviewForm({ space, setSelectVideo }) {
  const [video, setVideo] = useState(null);
  const [videoPreview, setVideoPreview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video")) {
      setVideo(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (e) => {
    if (!isChecked) {
      toast("😕 Permission required to continue.", {
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
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("rating", rating);
    formData.append("spaceId", space._id);
    formData.append("video", video);
    formData.append("type", "video");

    try {
        console.log('inside try');
      const response = await fetch("/api/submit-video-review", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("🎉 Review submitted successfully.", {
          autoClose: 200,
          onClose: () => {
            setSelectVideo(false);
          },
        });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };
  return (
    <div
      className="fixed z-50 inset-0 overflow-y-auto"
      style={{ "--link-color": "#5d5dff" }}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &ZeroWidthSpace;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl relative transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
          <form method="post">
            <button
              onClick={() => {
                setSelectVideo(false);
              }}
              className="text-gray-400 rounded-full w-6 h-6"
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                zIndex: 999,
                outline: "none",
              }}
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
                />
              </svg>
            </button>
            <div className="sm:flex sm:items-start">
              <div className="mt-3 w-full text-left sm:mt-0">
                <div className="mx-auto flex items-center">
                  <div>
                    <svg
                      className="h-6 w-6 text-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <span className="ml-5 rounded-md">
                    <input
                      type="file"
                      accept="video/*"
                      name="videoFile"
                      id="videoFile"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="videoFile"
                      className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out cursor-pointer"
                    >
                      Choose video
                    </label>
                  </span>
                </div>

                <div className="mt-4">
                  {videoPreview && (
                    <video width="100%" controls>
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <div className="star-ratings" title={`${rating} Stars`}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className="star-container"
                            style={{
                              position: "relative",
                              display: "inline-block",
                              verticalAlign: "middle",
                              padding: "3px",
                              cursor: "pointer",
                              backgroundColor: "transparent",
                              border: "none",
                              outline: "none",
                            }}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                          >
                            <svg
                              viewBox="0 0 51 48"
                              className="widget-svg"
                              style={{
                                width: "20px",
                                height: "20px",
                                transition: "transform 0.2s ease-in-out",
                              }}
                            >
                              <path
                                className="star"
                                d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                style={{
                                  fill:
                                    star <= (hover || rating)
                                      ? "rgb(255, 182, 33)"
                                      : "rgb(203, 211, 227)",
                                  transition: "fill 0.2s ease-in-out",
                                }}
                              />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 rounded-md shadow-sm w-full">
                    <div className="mt-1 relative rounded-md">
                      <label htmlFor="name" className="text-sm text-gray-700">
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        maxLength="128"
                        className="form-input text-gray-700 border-b border-gray-300 block w-full sm:text-sm sm:leading-5 py-2"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-2 rounded-md shadow-sm w-full">
                    <div className="mt-1 relative rounded-md">
                      <label
                        htmlFor="email"
                        className="flex space-x-1 text-sm text-gray-700"
                      >
                        <span>Your Email </span>
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        required
                        id="email"
                        type="email"
                        className="form-input text-gray-700 border-b border-gray-300 block w-full sm:text-sm sm:leading-5 py-2"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-2 rounded-md w-full consent-text">
                    <div
                      className="mt-1 relative flex rounded-md items-start overflow-auto"
                      style={{ maxHeight: "100px" }}
                    >
                      <div className="flex items-center h-5 ml-1 mt-2">
                        <input
                          required
                          aria-required="true"
                          id="confirm"
                          name="confirm"
                          type="checkbox"
                          className=" h-4 w-4 text-purple-600 rounded focus:outline-none focus:ring-0 border-gray-300"
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <div className="ml-2 text-sm leading-5">
                        <label htmlFor="confirm" className="text-gray-600">
                          I give permission to use this testimonial across
                          social channels and other marketing efforts
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleSubmit}
              >
                Send
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-200 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                onClick={() => {
                  setSelectVideo(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VideoReviewForm;
