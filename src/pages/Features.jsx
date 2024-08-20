import React from "react";
import F1 from "../assets/images/featurepage/F1.png";
import F2 from "../assets/images/featurepage/F2.png";
import F3 from "../assets/images/featurepage/F3.png";
import F5 from "../assets/images/featurepage/F5.png";
import F6 from "../assets/images/featurepage/F6.png";
import F7 from "../assets/images/featurepage/F7.png";
import F8 from "../assets/images/featurepage/F8.png";
import F9 from "../assets/images/featurepage/F9.svg";
import F10 from "../assets/images/featurepage/F10.svg";
import F11 from "../assets/images/featurepage/F11.png";
import F12 from "../assets/images/featurepage/F12.jpeg";
import FeatureList from "../assets/FeatureList.json";
import FeatureBox from "../components/FeatureBox";
import GetStarted from "../components/GetStarted";

const Features2 = () => {
  return (
    <main className="flex-grow">
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none"></div>
      <section className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 md:pt-40">
            <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16 mt-20">
              <h1 className="h1 mb-4" data-aos="fade-up">
                Collect and display testimonials all in one solution
              </h1>
            </div>
            <div className="relative overflow-hidden">
              <div id="b2b-companies" className="relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                  <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0">
                    <div>
                      <div className="pt-6">
                        <div className="font-semibold text-xl text-purple-600 mb-2">
                          Quick to setup
                        </div>
                        <h3 className="h3 mb-3">A dedicated landing page</h3>
                        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                          Create a dedicated landing page for your business.
                          Share the page link easily via email, social media, or
                          even SMS. Setup can be done in two minutes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-auto">
                    <div className="p-4">
                      <img
                        loading="lazy"
                        className="mt-10 mx-auto relative lg:mt-0"
                        src={F1}
                        width="540"
                        height="405"
                        alt="quick to set up"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div id="agency-freelancer">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                  <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                    <div>
                      <div className="pt-6">
                        <div className="font-semibold text-xl text-purple-600 mb-2">
                          Easy to manage
                        </div>
                        <h3 className="h3 mb-3">
                          A dashboard to manage all testimonials
                        </h3>
                        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                          You will have a simple &amp; clean dashboard to manage
                          all testimonials in one place. It's like your email
                          inbox, but it's designed for your social proof!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-auto lg:col-start-1">
                    <div className="p-4">
                      <img
                        loading="lazy"
                        className="mt-10 mx-auto relative lg:mt-0"
                        src={F2}
                        width="540"
                        alt="easy to manage"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div id="course-creators" className="relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                  <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0">
                    <div>
                      <div className="pt-6">
                        <div className="font-semibold text-xl text-purple-600 mb-2">
                          Embed the Wall of Love
                        </div>
                        <h3 className="h3 mb-3">
                          The best testimonials all in one place
                        </h3>
                        <p className="my-4 text-lg text-gray-500 dark:text-gray-400">
                          Treat the Wall of Love as the place to showcase all
                          your favorite testimonials. You can embed it to your
                          website in under a minute. No coding knowledge
                          required!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-auto">
                    <div className="p-4">
                      <img
                        loading="lazy"
                        className="mt-10 mx-auto relative lg:mt-0"
                        src={F3}
                        width="540"
                        alt="all in one wall of love"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center">
            <h1 className="h1 text-gray-200">Integrate with any platform</h1>
            <p className="mt-4 max-w-4xl mx-auto text-xl text-gray-400">
              We built the ultimate tool for showcasing your satisfied
              customers. With 3-lines of HTML code, you can embed all your
              testimonials to any platform!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-12 sm:gap-6 lg:mt-16 lg:grid-cols-4">
            <div className="overflow-hidden border border-gray-800 rounded-xl">
              <div className="flex items-center justify-center px-8 py-4 bg-white">
                <img
                  className="object-contain h-8 max-w-full sm:h-10 w-44 bg-white"
                  src={F5}
                  alt="Webflow"
                />
              </div>
            </div>
            <div className="overflow-hidden border border-gray-800 rounded-xl">
              <div className="flex items-center justify-center px-8 py-4 bg-white">
                <img
                  className="object-contain h-8 max-w-full sm:h-10 w-44 bg-white"
                  src={F6}
                  alt="Shopify"
                />
              </div>
            </div>
            <div className="overflow-hidden border border-gray-800 rounded-xl">
              <div className="flex items-center justify-center px-8 py-4 bg-white">
                <img
                  className="object-contain h-8 max-w-full sm:h-10 w-44 bg-white"
                  src={F7}
                  alt="Carrd"
                />
              </div>
            </div>
            <div className="overflow-hidden border border-gray-800 rounded-xl">
              <div className="flex items-center justify-center px-8 py-4 bg-white">
                <img
                  className="object-cover h-8 max-w-full sm:h-10 w-56 bg-white"
                  src={F8}
                  alt="WordPress"
                />
              </div>
            </div>
            <div className="overflow-hidden border border-gray-800 rounded-xl">
              <div className="flex items-center justify-center px-8 py-4 bg-white">
                <img
                  className="object-contain h-8 max-w-full sm:h-10 w-44 bg-white"
                  src={F9}
                  alt="Kajabi"
                />
              </div>
            </div>
            <div className="overflow-hidden border border-gray-800 rounded-xl">
              <div className="flex items-center justify-center px-8 py-4 bg-white">
                <img
                  className="object-contain h-8 max-w-full sm:h-10 w-44 bg-white"
                  src={F10}
                  alt="Bubble"
                />
              </div>
            </div>
            <div className="overflow-hidden border border-gray-800 rounded-xl">
              <div className="flex items-center justify-center px-8 py-4 bg-white">
                <img
                  className="object-contain h-8 max-w-full sm:h-10 w-44 bg-white"
                  src={F11}
                  alt="Framer"
                />
              </div>
            </div>
            <div className="overflow-hidden border border-gray-800 rounded-xl">
              <div className="flex items-center justify-center px-8 py-4 bg-white">
                <img
                  className="object-cover h-8 max-w-full sm:h-10 w-44 bg-white"
                  src={F12}
                  alt="Squarespace"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 sm:mt-12 lg:mt-16">
            <div className="inline-flex flex-col items-center">
              <a
                href="/integrations"
                title=""
                className="text-base font-semibold underline text-gray-400"
              >
                ✨ See all integrations
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 dark:border-t dark:border-gray-800">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">
                Everything you need to leverage testimonials
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                We support all these features for you to collect and manage all
                testimonials. Features with the lock are only available for the
                paid plans.
              </p>
            </div>

            <div
              className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
              data-aos-id-blocks="true"
            >
              {FeatureList.map((feature) => {
                return <FeatureBox info={feature} key={feature.id} />;
              })}
            </div>
          </div>
        </div>
      </section>

      <GetStarted />
    </main>
  );
};

export default Features2;
