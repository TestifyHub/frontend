import React from "react";
import { useNavigate } from "react-router-dom";

function SuccessComponent({ spaceId, spaceName }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen overflow-y-scroll bg-gray-50">
      <div className="fixed z-40 inset-0 overflow-y-scroll">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 bg-dashboard">
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          <div className="inline-block align-bottom bg-white rounded-sm px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-top sm:max-w-sm sm:w-full sm:p-6">
            <div className="text-center">
              <h3 className="text-lg leading-6 font-semibold text-gray-800 mt-4">
                Added {spaceName} successfully
              </h3>
              <p className="text-sm font-medium text-gray-600 break-words mt-2">
                Here is the link for your customers:
                <div>
                  <p className="text-sm font-medium text-purple-600 break-words cursor-pointer">{`http://localhost:5173/submitreview/${spaceId}`}</p>
                </div>
              </p>
            </div>
            <div className="mt-4">
              <span className="flex w-full rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-purple-600 text-base leading-6 font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={() => navigate(`/dashboard`)}
                >
                  Close
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessComponent;
