import { useState } from "react";
import "./styles.css";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(GetCurrentindex) {
    setRating(GetCurrentindex);
  }

  function handleMouseEnter(GetCurrentindex) {
    setHover(GetCurrentindex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="start-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={35}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
