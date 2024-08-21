import React, { useState, useEffect } from "react";
import GetStarted from "../components/GetStarted";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

const filters = [
  "All", // Add "All" as an option
  "Popular",
  "Ecommerce",
  "Website Builders",
  "Online Creators",
  "Newsletters",
  "Online Courses",
  "Virtual Events",
  "Real Estate",
  "Review Platforms",
  "Local Business",
  "Custom",
];

function Integrations() {
  const [integrations, setIntegrations] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with a duration of 1 second

    const fetchData = async () => {
      let url = "/api/integrations";
      if (filter !== "All") {
        url = `/api/integrations/${filter}`;
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
        setIntegrations(data);
      } catch (error) {
        console.error("Error fetching integrations:", error);
      }
    };

    fetchData();
  }, [filter]);

  return (
    <main className="flex-grow">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 mt-20">
            <div className="max-w-4xl mx-auto text-center pb-16">
              <h1 className="h1 mb-4" data-aos="fade-up">
                Embed your feedback on any platform
              </h1>
              <p
                className="text-xl text-gray-500 dark:text-gray-400"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We built the ultimate tool for showcasing your satisfied
                customers. With 3-lines of HTML code, you can embed all your
                testimonials to any platform!
              </p>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div
                className="w-full md:w-1/4 mb-3 md:mb-0 sticky top-5"
                data-aos="fade-up"
              >
                <div className="relative inline-block text-left z-30 block md:hidden w-full">
                  <div>
                    <button
                      className="admin-options-btn inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500"
                      id="headlessui-menu-button-5"
                      type="button"
                    >
                      {filter} Integrations
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="-mr-1 ml-2 h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <ul className="list-none space-y-2 hidden md:block">
                  {filters.map((x) => (
                    <li
                      key={x}
                      className={`border-l-4 py-2 cursor-pointer transition-all duration-300 ${
                        filter === x
                          ? "bg-purple-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 border-purple-600 rounded-r-md"
                          : "border-transparent text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setFilter(x)}
                    >
                      <span className="ml-3 font-bold">{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content */}
              <div
                className="flex-1 widget-list-container md:px-8"
                data-aos="fade-up"
              >
                <div
                  className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 sm:px-0"
                  data-aos="fade-up"
                >
                  {integrations.map((data) => {
                    let path = `/integrationpage/${data.path}`;
                    return (
                      <div
                        key={data.name}
                        className="sm:rounded-tr-lg relative group dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 shadow-sm border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-md transition-transform duration-300 hover:scale-105"
                        data-aos="fade-up"
                      >
                        <div>
                          <span className="rounded-full inline-flex ring-2 ring-white dark:ring-gray-200 transition-transform duration-300 group-hover:scale-110">
                            <img
                              loading="lazy"
                              src={path}
                              className="rounded-full h-16 w-16 object-cover border border-gray-200"
                            ></img>
                          </span>
                        </div>
                        <div className="mt-6 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white">
                          <h3 className="text-xl font-semibold">
                            <span className="absolute inset-0"></span>
                            {data.name}
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </div>
      </section>
      <GetStarted />
    </main>
  );
}

export default Integrations;
