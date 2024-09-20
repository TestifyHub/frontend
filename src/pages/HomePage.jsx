import React, { useState } from "react";
import img1 from "/homepage/chillipeper.png";
import img2 from "/homepage/chime-logo.svg";
import img3 from "/homepage/earnest-capital.aa8f8027.svg";
import img4 from "/homepage/ko-fiLogo.png";
import img5 from "/homepage/levels-fyi.a9dbd0c4.svg";
import img6 from "/homepage/microacquire.6529dbcf.svg";
import img7 from "/homepage/mixpanel.png";
import img8 from "/homepage/rewardful.bce901b7.svg";
import img9 from "/homepage/yoto.png";
import img10 from "/homepage/yoast.png";

function HomePage() {
  const [copySuccess, setCopySuccess] = useState(false);
  const codeSnippet = `<iframe src="http://localhost:5000/embed/66e54c672d9a36ec880d3912" frameborder="0" width="100%" height="400px"></iframe>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet).then(
      () => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000); // Clear the success message after 2 seconds
      },
      (err) => {
        setCopySuccess("Failed to copy!");
      }
    );
  };

  const containerStyle = {
    backgroundColor: "#1e1e1e",
    padding: "20px",
    borderRadius: "8px",
    width: "fit-content",
    maxWidth: "100%",
    margin: "20px 0",
    position: "relative",
  };

  const codeBoxStyle = {
    color: "#ffffff",
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: "14px",
    overflowX: "auto",
    padding: "10px",
    whiteSpace: "pre-wrap",
  };

  const feedbackStyle = {
    color: "#4CAF50",
    fontSize: "12px",
    marginLeft: "10px",
  };

  return (
    <main className="flex-grow">
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative pt-32 pb-10 md:pt-40 md:pb-20">
            <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4" data-aos="fade-up">
                {" "}
                Get testimonials from your customers with ease
              </h1>
              <p
                className="text-xl text-gray-600 dark:text-gray-400 mb-8"
                data-aos="fade-up"
              >
                Collecting testimonials is hard, we get it! So we built
                Testimonial. In minutes, you can collect text and video
                testimonials from your customers with no need for a developer or
                website hosting.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div>
                  <div className="sm:flex sm:gap-4">
                    <a
                      className="btn text-white bg-purple-600 transform hover:scale-105 w-full mb-4 sm:w-auto sm:mb-0 rounded-md"
                      href="/signup"
                    >
                      Try FREE now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="w-full">
        <svg
          viewBox="0 0 1440 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full bg-purple-50"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1440 0H0V78.5971C0 78.5971 188.5 13.1864 340.111 41.0377C491.722 68.889 598.092 84.5107 697.395 82.8849C743.873 82.124 806.499 68.3031 872.151 53.8143C946.766 37.3474 1025.29 20.0178 1088.46 20.0178C1225.53 20.0178 1440 82.8849 1440 82.8849V0Z"
            fill="#fff"
          ></path>
        </svg>
      </div> */}
      <section className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="py-12 dark:border-t dark:border-gray-800">
            <div className="max-w-4xl mx-auto text-center pb-6">
              <h1 className="h1 mb-4 aos-init aos-animate" data-aos="fade-up">
                Add testimonials to your website with no coding!
              </h1>
              <p
                className="max-w-4xl mx-auto text-xl text-gray-600 dark:text-gray-400 mb-8 aos-init aos-animate"
                data-aos="fade-up"
              >
                Copy and paste our HTML code to add the Wall Of Love (
                <a className="underline" href="/wall-of-love">
                  👉 full version
                </a>
                ) to your website. We support any no-code platform (Webflow,
                WordPress, you name it!)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full md:max-w-3xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div
              className="overflow-hidden shadow rounded-lg"
              style={{ backgroundColor: "rgb(31, 45, 61)" }}
            >
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-xl leading-6 font-medium text-white">
                  Try our sample embed code
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-100">
                  <p>Embed the wall of love to your website in 1 minute</p>
                </div>
                <div style={containerStyle}>
                  <div className="code-header">
                    {copySuccess && (
                      <span style={feedbackStyle}>{copySuccess}</span>
                    )}
                  </div>
                  <pre style={codeBoxStyle}>
                    <code>{codeSnippet}</code>
                  </pre>
                </div>
                <div className="mt-5 flex">
                  <button
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm w-40"
                    onClick={copyToClipboard}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 my-auto mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Copy the code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
