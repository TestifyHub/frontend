import React from "react";
import { toast } from "react-toastify";
import user from "/user.png";

function TextReviewForm({ space, setSelectText }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imagePreview, setImagePreview] = useState(user);
  const [pfpPic, setPfpPic] = useState(user);
  const [isChecked, setIsChecked] = useState(false);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  const handlePfpImgChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPfpPic(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    formData.append("text", message);
    formData.append("rating", rating);
    formData.append("spaceId", space.id);
    formData.append("image", pfpPic);
    formData.append("type", "text");

    try {
      const response = await fetch("/api/submit-text-review", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("🎉 Review submitted successfully.", {
          autoClose: 200,
          onClose: () => {
            setSelectText(false);
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
                setSelectText(false);
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
                <h3 className="text-lg leading-6 font-semibold text-gray-800">
                  Write text review
                </h3>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div>
                      <img
                        src={space.image}
                        alt="space logo"
                        className="h-10 rounded-md shadow-md"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg leading-6 font-semibold text-gray-800 capitalize mb-2">
                    Questions
                  </h3>
                  <div
                    className="w-10 mb-2 border-b-4"
                    style={{ borderColor: "rgb(93, 93, 255);" }}
                  ></div>
                  <ul className="mt-2 max-w-xl text-sm text-gray-500 list-disc pl-4">
                    {space.questions.map((question) => {
                      return <li key={question}>{question.text}</li>;
                    })}
                  </ul>
                </div>
                <div className="mt-4">
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
                  <div className="mt-3">
                    <div className="rounded-md w-full">
                      <textarea
                        required
                        minLength={30}
                        id="message"
                        name="message"
                        rows="5"
                        placeholder=""
                        className="shadow-sm flex-1 form-input block w-full min-w-0 rounded-md text-gray-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300"
                        value={message}
                        onChange={handleMessageChange}
                        onBlur={handleBlur}
                      />
                      {isTouched && message.length < 30 && (
                        <p className="text-red-600 text-sm mt-1">
                          Message must be at least 30 characters long.
                        </p>
                      )}
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
                  <div className="mt-2 flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="text-sm text-gray-700"
                        htmlFor="newAvatarURL"
                      >
                        Upload Your Photo
                      </label>
                      <div className="mt-2 flex items-center">
                        {/* Image preview */}
                        <span
                          className={`rounded-full h-20 w-20 bg-gray-300 ${
                            imagePreview ? "bg-cover bg-center" : ""
                          }`}
                          style={
                            imagePreview
                              ? { backgroundImage: `url(${imagePreview})` }
                              : {}
                          }
                        ></span>
                        <span className="ml-5 rounded-md">
                          <input
                            type="file"
                            accept="image/*"
                            name="newAvatarURL"
                            id="newAvatarURL"
                            className="newAvatarFile hidden"
                            onChange={handlePfpImgChange}
                          />
                          <label
                            htmlFor="newAvatarURL"
                            className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out cursor-pointer"
                          >
                            Choose file
                          </label>
                        </span>
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
                  setSelectText(false);
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

export default TextReviewForm;
