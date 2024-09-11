import React, { useState } from "react";
import people from "../js/data";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumbder = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      return checkNumbder(index + 1);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      return checkNumbder(index - 1);
    });
  };

  const randPerson = () => {
    let randomIndex;
    
    do {
      randomIndex = Math.floor(Math.random() * people.length);
    } while(index === randomIndex);
    
    setIndex(randomIndex);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="name" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronCircleLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronCircleRight />
        </button>
      </div>
      <button className="random-btn" onClick={randPerson}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
