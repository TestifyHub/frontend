import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import defaultImg from "/android-chrome-512x512.png";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SuccessComponent from "../components/SuccessComponent";

function NewSpace() {
  const initialQuestions = [
    { id: "1", text: "Question 1?" },
    { id: "2", text: "Question 2?" },
    { id: "3", text: "" },
  ];

  const navigate = useNavigate();
  const [questions, setQuestions] = useState(initialQuestions);
  const [userId, setUserId] = useState(null);
  const [imgPreview, setImgPreview] = useState(defaultImg);
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [spaceId, setSpaceId] = useState(null);

  const [data, setData] = useState({
    spaceName: "",
    image: defaultImg,
    header: "Your Header Title",
    message: "Custom message",
    questions: initialQuestions,
    color: "#5D5DFF",
  });

  
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const response = await fetch("/api/verify-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (result.valid) {
          setUserId(result.userId);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    };

    fetchUserId();
  }, [navigate]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setData({ ...data, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleQuestionChange = (id, newText) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, text: newText } : q))
    );
  };

  const addQuestion = () => {
    if (questions.length < 3) {
      const newQuestion = {
        id: Date.now().toString(),
        text: "",
      };
      setQuestions([...questions, newQuestion]);
    }
  };

  const deleteQuestion = (id) => {
    setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
  };

  const handleColorChange = (e) => {
    const value = e.target.value;
    if (/^[0-9A-F]{6}$/i.test(value)) {
      setData({ ...data, color: `#${value}` });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!data.spaceName) {
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
      setLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append("spaceName", data.spaceName);
    formData.append("header", data.header);
    formData.append("message", data.message);
    formData.append("questions", JSON.stringify(questions));
    formData.append("color", data.color);
    if (data.image === defaultImg) {
      const response = await fetch(defaultImg);
      const blob = await response.blob();
      const file = new File([blob], "defaultImg.png", { type: blob.type });
      formData.append("image", file);
    } else {
      formData.append("image", data.image);
    }
    formData.append("userId", userId);

    try {
      const response = await fetch("/api/newspace", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          toast.success("Space created!", {
            autoClose: 200,
            onClose: () => {
              setSpaceId(result.space._id);
              setCreated(true);
            },
          });
        } else {
          toast.warn("Failed to create space!", {
            autoClose: 200,
            onClose: () => navigate("/dashboard"),
          });
        }
      } else {
        toast.warn("Failed to create space!", {
          autoClose: 200,
          onClose: () => navigate("/dashboard"),
        });
      }
    } catch (error) {
      toast.error("Invalid session", {
        autoClose: 200,
        onClose: () => {
          localStorage.removeItem("jwt");
          navigate("/sign");
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return created ? (
    <SuccessComponent spaceName={data.spaceName} spaceId={spaceId} />
  ) : (
    <div className="flex flex-col min-h-screen overflow-y-scroll bg-gray-50">
      <div className="fixed z-40 inset-0 overflow-y-scroll">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 bg-dashboard">
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow shadow-xl sm:my-8 sm:align-top sm:max-w-6xl sm:w-full sm:p-6 z-50">
            <div className="relative">
              <Link to="/dashboard">
                <button
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
              </Link>

              <div className="md:grid md:grid-cols-5 md:gap-6">
                {/* Left side */}
                <div className="md:col-span-2 py-6 md:py-12 ">
                  <div className="flex flex-col rounded-lg border border-gray-200 false">
                    <div className="flex flex-col ">
                      <main className="flex-grow">
                        <section className="relative overflow-visible">
                          <div className="absolute top-0 left-0 ml-6 -mt-4 z-50">
                            <div className="relative inline-flex text-sm font-semibold py-1 px-3 mt-px text-green-600 bg-green-200 rounded-full">
                              Live preview
                            </div>
                          </div>
                          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                            <div className="py-12">
                              <div className="max-w-3xl mx-auto text-center pb-6">
                                <div className="relative inline-flex flex-col justify-center mb-4">
                                  <img
                                    loading="lazy"
                                    className="rounded-md"
                                    src={imgPreview}
                                    style={{ maxWidth: "100px" }}
                                  />
                                </div>
                                <h3 className="h3 mb-4 text-gray-600">
                                  {data.header}
                                </h3>
                                <div className="custom-message text-base text-gray-500">
                                  <p>{data.message}</p>
                                </div>
                                <div className="w-full px-4 py-4 text-left mx-auto overflow-hidden">
                                  <h3 className="text-lg leading-6 font-semibold text-gray-600 uppercase mb-2">
                                    Questions
                                  </h3>
                                  <div
                                    className="w-10 mb-2 border-b-4"
                                    style={{ borderColor: data.color }}
                                  ></div>
                                  <ul className="mt-2 max-w-xl text-base list-disc pl-4 text-gray-500">
                                    {questions.map((question) => (
                                      <li key={question.id} className="mb-2">
                                        {question.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              {/* Upload buttons */}
                              <div className="mt-6">
                                <div>
                                  <button
                                    className="btn text-white text-sm mb-2 w-full px-4 py-2"
                                    style={{
                                      backgroundColor: data.color,
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5 mr-3"
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
                                    Upload a video
                                  </button>
                                </div>
                                <div>
                                  <button className="btn text-white text-sm bg-gray-700 w-full px-4 py-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5 mr-3"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                      />
                                    </svg>
                                    Send in text
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </main>
                    </div>
                  </div>
                </div>
                {/* Right side */}
                <form
                  className="mt-5 md:mt-0 md:col-span-3"
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <section className="relative">
                    <div className="w-full mx-auto px-4 sm:px-6 relative">
                      <div className="py-12">
                        <div className="w-full mx-auto text-center pb-12 text-gray-800">
                          <h3 className="h3 mb-4" data-aos="fade-up">
                            Create a new Space
                          </h3>
                          <p
                            className="text-base w-full text-gray-600"
                            data-aos="fade-up"
                            data-aos-delay="200"
                          >
                            After the Space is created, it will generate a
                            dedicated page for collecting reviews.
                          </p>
                        </div>

                        <div className="max-w-xl mx-auto">
                          <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                              <label className="block text-gray-700 text-sm font-medium mb-1">
                                Space name{" "}
                                <span className="text-red-600">*</span>
                              </label>
                              <input
                                type="text"
                                name="spaceName"
                                className="form-input w-full text-gray-800 border-gray-300 rounded-md"
                                onChange={(e) =>
                                  setData({
                                    ...data,
                                    spaceName: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>

                          <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                              <label className="flex flex-row text-gray-700 text-sm font-medium mb-1">
                                Logo <span className="text-red-600">*</span>
                              </label>
                              <div className="mt-2 flex items-center">
                                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                  {imgPreview && (
                                    <img
                                      src={imgPreview}
                                      alt="Uploaded"
                                      className="w-full h-full object-cover"
                                    />
                                  )}
                                </span>
                                <span className="ml-5 rounded-md shadow-sm">
                                  <input
                                    type="file"
                                    accept="image/*"
                                    id="newLogoURL"
                                    className="hidden"
                                    onChange={handleImageChange}
                                  />
                                  <label
                                    htmlFor="newLogoURL"
                                    className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-600 hover:text-gray-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out cursor-pointer"
                                  >
                                    Change
                                  </label>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                              <label className="flex flex-row text-gray-700 text-sm font-medium mb-1">
                                Header title
                                <span className="text-red-600">*</span>
                              </label>
                              <input
                                id="header"
                                type="text"
                                className="form-input w-full text-gray-800 border-gray-300 rounded-md"
                                placeholder="Enter header title"
                                onChange={(e) => {
                                  setData({ ...data, header: e.target.value });
                                }}
                              ></input>
                            </div>
                          </div>

                          <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                              <label className="flex flex-row text-gray-700 text-sm font-medium mb-1">
                                Your custom message
                                <span className="text-red-600">*</span>
                              </label>
                              <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Write message to your customers, and give them simple directions on how to make the best testimonial."
                                className="flex-1 form-input block w-full min-w-0 rounded-md text-gray-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300"
                                onChange={(e) => {
                                  setData({ ...data, message: e.target.value });
                                }}
                              />
                            </div>
                          </div>

                          <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                              {questions.map((question) => (
                                <div
                                  key={question.id}
                                  className="mt-2 flex flex-row items-center"
                                >
                                  <input
                                    type="text"
                                    placeholder="keep it short"
                                    className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-700 pr-20"
                                    maxLength="100"
                                    value={question.text}
                                    onChange={(e) =>
                                      handleQuestionChange(
                                        question.id,
                                        e.target.value
                                      )
                                    }
                                  />
                                  <button
                                    type="button"
                                    className="ml-2 text-red-600 hover:text-red-800"
                                    onClick={() => deleteQuestion(question.id)}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              ))}
                              {questions.length < 3 && (
                                <button
                                  type="button"
                                  className="mt-2 flex flex-row items-center p-1 pl-0 border border-transparent rounded-full text-gray-800 text-sm"
                                  onClick={addQuestion}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-5 w-5 mr-1"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <span>Add one (up to 3)</span>
                                </button>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                              <label className="flex flex-row text-gray-700 text-sm font-medium mb-1">
                                Custom color
                                <span className="text-red-600">*</span>
                              </label>
                              <div className="flex flex-wrap gap-1 justify-center items-center">
                                <div
                                  className="rounded-lg h-8 w-8 bg-orange-500"
                                  onClick={() => {
                                    setData({ ...data, color: "#f97316" });
                                  }}
                                ></div>
                                <div
                                  className="rounded-lg h-8 w-8 bg-yellow-500"
                                  onClick={() => {
                                    setData({ ...data, color: "#eab308" });
                                  }}
                                ></div>
                                <div
                                  className="rounded-lg h-8 w-8 bg-emerald-400"
                                  onClick={() => {
                                    setData({ ...data, color: "#34d399" });
                                  }}
                                ></div>
                                <div
                                  className="rounded-lg h-8 w-8 bg-green-500"
                                  onClick={() => {
                                    setData({ ...data, color: "#22c55e" });
                                  }}
                                ></div>
                                <div
                                  className="rounded-lg h-8 w-8 bg-sky-300"
                                  onClick={() => {
                                    setData({ ...data, color: "#7dd3fc" });
                                  }}
                                ></div>
                                <div
                                  className="rounded-lg h-8 w-8 bg-blue-500"
                                  onClick={() => {
                                    setData({ ...data, color: "#3b82f6" });
                                  }}
                                ></div>
                                <div
                                  className="rounded-lg h-8 w-8 bg-gray-400"
                                  onClick={() => {
                                    setData({ ...data, color: "#9ca3af" });
                                  }}
                                ></div>
                                <div
                                  className="rounded-lg h-8 w-8 bg-red-500"
                                  onClick={() => {
                                    setData({ ...data, color: "#ef4444" });
                                  }}
                                ></div>
                                <div
                                  className="rounded-lg h-8 w-8 bg-pink-400"
                                  onClick={() => {
                                    setData({ ...data, color: "#f472b6" });
                                  }}
                                ></div>
                                <div
                                  className="rounded-lg h-8 w-8 bg-purple-600"
                                  onClick={() => {
                                    setData({ ...data, color: "#5D5DFF" });
                                  }}
                                ></div>
                                <div className="relative">
                                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                                    #
                                  </span>
                                  <input
                                    type="text"
                                    name="color"
                                    className="pl-7 shadow-sm focus:ring-gray-300 focus:border-gray-300 sm:text-sm border-gray-300 rounded-md text-gray-700"
                                    placeholder="FFFFFF"
                                    onChange={handleColorChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap -mx-3 mt-6">
                            <div className="w-full px-3">
                              <button
                                className="btn text-white hover:bg-purple-700 w-full"
                                disabled={loading}
                                type="submit"
                                style={{ backgroundColor: data.color }}
                              >
                                {loading ? (
                                  <>
                                    <svg
                                      className="animate-spin h-5 w-5 mr-3 text-white"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                    >
                                      <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                      ></circle>
                                      <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                      ></path>
                                    </svg>
                                    <span>Creating...</span>
                                  </>
                                ) : (
                                  "Create new Space"
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSpace;
