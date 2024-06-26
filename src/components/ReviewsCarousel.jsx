import React, { useState } from "react";
import Slider from "react-slick";
import reviews from "./recensioni.json";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <Dot $isActive={i === currentSlide}>
        <DotProgress $isActive={i === currentSlide} />
      </Dot>
    ),
  };

  return (
    <div className="px-4">
      <Slider {...settings} className="flex items-center justify-center h-64">
        {reviews.reviews.map((review, index) => (
          <div key={index} className="h-40 p-2 my-6 ring-1 ring-olive">
            <div className="flex items-center justify-between px-4 pt-1 border-b-2 border-olive">
              <h2 className="">{review.username}</h2>
              <p>Valutazione: {review.rating} Stelle</p>
            </div>
            <div className="px-4 pt-8">
              <p>{review.review}</p>
            </div>
            <div className="relative top-20">
              <p className="absolute right-4 bottom-5">Data: {review.date}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) =>
    props.$isActive ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.5)"};
  margin: 0px 4px;
  position: relative;
  top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DotProgress = styled.div`
  width: ${(props) => (props.$isActive ? "100%" : "0%")};
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  transition: width 6s linear;
`;

export default ReviewsCarousel;
