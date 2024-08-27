import React from "react";

function Loading() {
  return (
    <div className="w-full px-6 py-6 lg:px-64 lg:py-24 min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center flex space-x-2">
        <div className="dot w-3 h-3 rounded-full animate-bounce-color delay-0"></div>
        <div className="dot w-3 h-3 rounded-full animate-bounce-color delay-150"></div>
        <div className="dot w-3 h-3 rounded-full animate-bounce-color delay-300"></div>
      </div>
    </div>
  );
}

export default Loading;
