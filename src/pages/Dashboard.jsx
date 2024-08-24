import React from "react";
import { Link } from "react-router-dom";
import i1 from "../assets/images/dashboard.png";

function Dashboard() {
  return (
    <div>
      <section className="relative dashboard-spaces mt-7">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="flex-1 flex items-center justify-between pb-5">
              <h3 className="h3 font-semibold tracking-wide">Spaces</h3>
              <div className="relative inline-block text-left">
                <div className="relative flex-shrink-0 pl-4 ml-4">
                  <Link
                    to="/newspace"
                    className="create-new-space-btn btn-sm text-white bg-purple-600 hover:bg-purple-700 font-semibold inline-flex items-center px-4 py-2 rounded"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="flex text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                      Create a new space
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overflow-hidden mx-auto">
              <img
                loading="lazy"
                className="w-48 h-48 my-5 mx-auto rounded-lg"
                src={i1}
                alt="success"
              />
              <p className="max-w-xl mt-5 mx-auto text-center text-lg leading-7 text-gray-400">
                No space yet, add a new one?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
