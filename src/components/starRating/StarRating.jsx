import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starRating.css";

const StarRating = ({ noOfStar = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleMouseMove(index) {
    setHover(index);
  }
  function handleMouseLeave(index) {
    setHover(rating);
  }
  function handleClick(index) {
    setRating(index);
  }
  return (
    <div>
      {[...Array(noOfStar)].map((star, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onMouseOver={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleClick(index)}
            className={index <= hover ? "active" : "inactive"}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
