/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";

import Header from "../../util/SectioonHeader/Header";
import { reviewData } from "../../data/productData";
import {
  ReviewWrapper,
  ReviewBoxWrapper,
  ReviewImage,
  ReviewBodyText,
  ReviewName,
} from "./ReviewStyle";

const Review = () => {
  
  SwiperCore.use([Autoplay]);

  return (
    <section id="review">
      <Header subText="Customer's" text="Review" />
      <ReviewWrapper>
        <Swiper
          spaceBetween={40}
          modules={[Navigation]}
          navigation
          autoplay={{ delay: 7500, disableOnInteraction: false }}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}>
          {reviewData.map((review, reviewIndex) => (
            <SwiperSlide key={reviewIndex}>
              <ReviewBoxWrapper key={review.id}>
                <ReviewImage src={review.src} alt="review-card" />
                <ReviewBodyText>{review.text}</ReviewBodyText>
                <ReviewName>{review.name}</ReviewName>
                <div className="stars">
                  {review.star1} {review.star2} {review.star3} {review.star4}{" "}
                  {review.halfStar}
                </div>
              </ReviewBoxWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </ReviewWrapper>
    </section>
  );
};

export default Review;
