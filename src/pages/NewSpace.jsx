import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function NewSpace() {
  const initialQuestions = [
    { id: "1", text: "Question 1?" },
    { id: "2", text: "Question 2?" },
    { id: "3", text: "" },
  ];

  const [questions, setQuestions] = useState(initialQuestions);

  const [data, setData] = useState({
    spaceName: "",
    image: null,
    header: "",
    questions: initialQuestions,
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData({ ...data, image: reader.result });
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

  return (
    <div className="flex flex-col min-h-screen overflow-y-scroll bg-gray-900">
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
                <div className="md:col-span-2 py-6 md:py-12"></div>
                {/* Right side */}
                <div className="mt-5 md:mt-0 md:col-span-3">
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
                                  {data.image && (
                                    <img
                                      src={data.image}
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSpace;
