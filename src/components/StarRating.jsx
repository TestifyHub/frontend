import React from "react";

const StarRating = ({ rating }) => {

  const maxStars = 5;

  // Create an array to map over for rendering stars
  const stars = Array.from({ length: maxStars }, (_, index) => {
    const starStyle = {
      fill: index < rating ? "rgb(255, 182, 33)" : "rgb(255, 255, 255)",
      transition: "fill 0.2s ease-in-out 0s",
    };

    return (
      <svg
        key={index}
        viewBox="0 0 51 48"
        className="widget-svg"
        style={{
          width: "24px",
          height: "24px",
          transition: "transform 0.2s ease-in-out 0s",
        }}
      >
        <path
          className="star"
          d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          style={starStyle}
        ></path>
      </svg>
    );
  });

  return <div className="star-ratings flex">{stars}</div>;
};

export default StarRating;
