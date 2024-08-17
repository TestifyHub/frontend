import React from 'react'

function FeatureBox(props) {
  return (
    <div
  className="relative flex flex-col items-center mx-auto aos-init aos-animate"
  data-aos="fade-up"
  data-aos-anchor="[data-aos-id-blocks]"
>
  <h2 className="h2 text-green-600">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  </h2>
  <h4 className="h4 mb-2">{props.info.title}</h4>
  <p className="text-lg text-gray-500 dark:text-gray-400 text-center">
    {props.info.desc}
  </p>
</div>
  )
}

export default FeatureBox