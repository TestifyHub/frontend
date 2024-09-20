import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import all from "../assets/images/spaces/all.svg";
import video from "../assets/images/spaces/video.svg";
import Text from "../assets/images/spaces/Text.svg";
import liked from "../assets/images/spaces/Liked.svg";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import TextReview from "./TextReview";
import { set } from "date-fns";
import VideoReview from "./VideoReview";

function MySpace() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [space, setSpace] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isHighlightTooltipVisible, setIsHighlightTooltipVisible] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [copySuccess,setCopySuccess]=useState(false);
  const codeSnippet = `<iframe src="http://localhost:5000/embed/${id}" frameborder="0" width="100%" height="400px"></iframe>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000); // Clear the success message after 2 seconds
    }, (err) => {
      setCopySuccess('Failed to copy!');
    });
  };

  const toggleOptions = () => setIsOptionsOpen(!isOptionsOpen);
  const toggleTooltip = () => setIsTooltipVisible(!isTooltipVisible);
  const toggleHighlightTooltip = () =>
    setIsHighlightTooltipVisible(!isHighlightTooltipVisible);

  const containerStyle = {
    backgroundColor: '#1e1e1e',
    padding: '20px',
    borderRadius: '8px',
    width: 'fit-content',
    maxWidth: '100%',
    margin: '20px 0',
    position: 'relative'
  };

  const codeBoxStyle = {
    color: '#ffffff',
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: '14px',
    overflowX: 'auto',
    padding: '10px',
    whiteSpace: 'pre-wrap'
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    marginBottom: '10px'
  };

  const feedbackStyle = {
    color: '#4CAF50',
    fontSize: '12px',
    marginLeft: '10px'
  };

  

  useEffect(() => {
    const fetchReviews = async () => {
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
          let userId = result.userId;
          const response2 = await fetch("/api/getspace", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: id,
            }),
          });
          const result2 = await response2.json();
          if (result2.found) {
            if (result2.space.userId === userId) {
              setSpace(result2.space);
              let api = "";
              switch (filter) {
                case "video":
                  api = `/api/reviews/${id}/video`;
                  break;
                case "text":
                  api = `/api/reviews/${id}/text`;
                  break;
                case "liked":
                  api = `/api/reviews/${id}/liked`;
                  break;
                default:
                  api = `/api/reviews/${id}`;
              }
              try {
                const response3 = await fetch(api);
                if (response3.ok) {
                  const data = await response3.json();
                  setReviews(data.reviews);
                  setLoading(false);
                } else {
                  toast.error("Failed to fetch reviews.");
                }
              } catch (error) {
                toast.error("An error occurred while fetching reviews.");
              }
            } else {
              toast.error("Invalid Space!", {
                autoClose: 200,
                onClose: () => {
                  navigate("/dashboard");
                },
              });
            }
          } else {
            toast.error("Invalid Space Link");
            navigate("/dashboard");
          }
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error verifying token:", error);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    fetchReviews();
    console.log(reviews);
  }, [filter]);

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
      console.log(error);
      toast.error("Internal server error");
    }
  };

  // Function to toggle modal visibility
  const handleToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <header className="bg-gray-50 dark:bg-gray-900 py-8 mt-20 border-b border-gray-50 dark:border-gray-800">
          <div className="mx-4 md:mx-auto container lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex justify-center sm:justify-start ml-5">
                <img
                  className="rounded-lg w-auto h-16 mr-5 border border-gray-200 dark:border-gray-800 mt-3"
                  src={space.image}
                />

                <div className="flex flex-col">
                  <h1 className="mt-2 text-2xl font-bold leading-7  sm:text-3xl sm:tracking-tight">
                    {space.spaceName}
                    <div className="relative inline-block text-left">
                      <div>
                        <button
                          className="flex items-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-100"
                          id="headlessui-menu-button-33"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded={isModalOpen}
                          onClick={handleToggle}
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
                          href={`http://localhost:5173/submitreview/${space._id}`}
                          target="_blank"
                          rel="noopener noreferrer" // Added rel for security
                          className="underline break-words"
                        >
                          {`http://localhost:5173/submitreview/${space._id}`}
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
                              <div className="max-w-4xl mx-auto flex ">
                             
                                <ul className="grid grid-cols-2 gap-6 sm:grid-cols-2">
                                
                                  <li className="col-span-1 flex flex-col text-center bg-white rounded-lg border-gray-300 border over:shadow-lg divide-y divide-gray-200 cursor-pointer">
                                    <div className="flex-1 flex flex-col justify-between">
                                      <img
                                        className="w-full flex-shrink-0 border-none my-auto rounded-lg "
                                        src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffixed-masonry-grid.png?alt=media&amp;token=c75b8785-344a-4bd8-96dd-79592466d78e"
                                        alt="Fixed masonry grid"
                                      />

                                      <h3 className="my-3 text-gray-900 text-base font-semibold">
                                        Masonry - fixed
                                      </h3>
                                    </div>
                                  </li>
               <li>                   <div style={containerStyle}>
      <div className="code-header">
        <button style={buttonStyle} onClick={copyToClipboard}>Copy</button>
        {copySuccess && <span style={feedbackStyle}>{copySuccess}</span>}
      </div>
      <pre style={codeBoxStyle}>
        <code>{codeSnippet}</code>
      </pre>
    </div>
                  </li>             
                                </ul>
             
                                
                              </div>
                              
                            
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
                    className={`w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 hover:text-gray-600 hover:bg-purple-100 dark:text-white rounded-md dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none transition ease-in-out duration-150 ${
                      filter === "all"
                        ? "bg-purple-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        : ""
                    }`}
                    aria-current="page"
                    onClick={() => {
                      setFilter("all");
                    }}
                  >
                    <img className="h-2 w-2 mr-2" src={all} />
                    All
                  </button>
                  <button
                    className={`w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 hover:text-gray-600 hover:bg-purple-100 dark:text-white rounded-md dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none transition ease-in-out duration-150 ${
                      filter === "video"
                        ? "bg-purple-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        : ""
                    }`}
                    onClick={() => {
                      setFilter("video");
                    }}
                  >
                    <img className="h-2 w-2 mr-2" src={video} />
                    Video
                  </button>
                  <button
                    className={`w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 hover:text-gray-600 hover:bg-purple-100 dark:text-white rounded-md dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none transition ease-in-out duration-150 ${
                      filter === "text"
                        ? "bg-purple-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        : ""
                    }`}
                    onClick={() => {
                      setFilter("text");
                    }}
                  >
                    <img className="h-2 w-2 mr-2" src={Text} />
                    Text
                  </button>

                  <button
                    className={`w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 hover:text-gray-600 hover:bg-purple-100 dark:text-white rounded-md dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none transition ease-in-out duration-150 ${
                      filter === "liked"
                        ? "bg-purple-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        : ""
                    }`}
                    onClick={() => {
                      setFilter("liked");
                    }}
                  >
                    <img className="h-2 w-2 mr-2" src={liked} />
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
                </div>
              </nav>
            </div>

            <div className="pb-20 my-10 mx-4 col-span-12 md:col-span-8 2xl:col-span-9 overflow-auto">
              <div className="flex my-3 2xl:w-3/4 2xl:mx-auto px-4 sm:px-6 justify-end"></div>
              {/* right side */}
              <div>
                {reviews.map((review) => {
                  if (review.type === "text") {
                    return (
                      <TextReview
                        review={review}
                        handleLike={handleLike}
                        key={review._id}
                      />
                    );
                  } else {
                    return (
                      <VideoReview
                        review={review}
                        handleLike={handleLike}
                        key={review._id}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MySpace;
