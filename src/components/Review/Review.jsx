/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import Header from "../../util/SectioonHeader/Header";
import {
  ReviewWrapper,
  ReviewBoxWrapper,
  ReviewImage,
  ReviewBodyText,
  ReviewName,
} from "./ReviewStyle";

const Review = () => {
  return (
    <section id="review">
      <Header subText="Customer's" text="Review" />
      <ReviewWrapper>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <ReviewBoxWrapper>
              <ReviewImage src="assets/ola (2).jpg" alt="" />
              <ReviewBodyText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat
                dolore ipsum id est maxime ad tempore quasi tenetur.
              </ReviewBodyText>
              <ReviewName>john doe</ReviewName>
              <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </ReviewBoxWrapper>
          </SwiperSlide>

          <SwiperSlide>
            <ReviewBoxWrapper>
              <ReviewImage src="assets/ola (2).jpg" alt="" />
              <ReviewBodyText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat
                dolore ipsum id est maxime ad tempore quasi tenetur.
              </ReviewBodyText>
              <ReviewName>john doe</ReviewName>
              <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </ReviewBoxWrapper>
          </SwiperSlide>

          <SwiperSlide>
            <ReviewBoxWrapper>
              <ReviewImage src="assets/ola (2).jpg" alt="" />
              <ReviewBodyText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat
                dolore ipsum id est maxime ad tempore quasi tenetur.
              </ReviewBodyText>
              <ReviewName>john doe</ReviewName>
              <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </ReviewBoxWrapper>
          </SwiperSlide>

          <SwiperSlide>
            <ReviewBoxWrapper>
              <ReviewImage src="assets/ola (2).jpg" alt="" />
              <ReviewBodyText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat
                dolore ipsum id est maxime ad tempore quasi tenetur.
              </ReviewBodyText>
              <ReviewName>john doe</ReviewName>
              <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </ReviewBoxWrapper>
          </SwiperSlide>

          <SwiperSlide>
            <ReviewBoxWrapper>
              <ReviewImage src="assets/ola (2).jpg" alt="" />
              <ReviewBodyText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat
                dolore ipsum id est maxime ad tempore quasi tenetur.
              </ReviewBodyText>
              <ReviewName>john doe</ReviewName>
              <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </ReviewBoxWrapper>
          </SwiperSlide>
        </Swiper>
      </ReviewWrapper>
    </section>
  );
};

export default Review;
