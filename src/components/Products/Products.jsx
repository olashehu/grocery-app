/** @format */

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Header from "../../util/SectioonHeader/Header";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  ProductSliderContainer,
  ProductsSlideBox,
  ProductSection,
} from "./ProductsStyled";

const Products = () => {
  return (
    <ProductSection id="products">
      <Header text="Products" subText="Our"/>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        <ProductSliderContainer className="swiper">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <ProductsSlideBox id="swiper-slide">
                <img src="../../assets/product-1.png" alt="" />
                <h3>fresh orange</h3>
                <div className="price">$4.99/- - 10.99/-</div>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </ProductsSlideBox>
            </SwiperSlide>
            <SwiperSlide>
              <ProductsSlideBox id="swiper-slide">
                <img src="../../assets/product-2.png" alt="" />
                <h3>fresh onion</h3>
                <div className="price">$4.99/- - 10.99/-</div>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </ProductsSlideBox>
            </SwiperSlide>
            <SwiperSlide>
              <ProductsSlideBox id="swiper-slide">
                <img src="../../assets/product-3.png" alt="" />
                <h3>fresh meat</h3>
                <div className="price">$4.99/- - 10.99/-</div>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </ProductsSlideBox>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <ProductsSlideBox id="swiper-slide">
                <img src="../../assets/product-4.png" alt="" />
                <h3>fresh cabbage</h3>
                <div className="price">$4.99/- - 10.99/-</div>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </ProductsSlideBox>
            </SwiperSlide>
          </div>
        </ProductSliderContainer>
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper">
        <ProductSliderContainer className="swiper">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <ProductsSlideBox id="swiper-slide">
                <img src="../../assets/product-5.png" alt="" />
                <h3>fresh potato</h3>
                <div className="price">$4.99/- - 10.99/-</div>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </ProductsSlideBox>
            </SwiperSlide>

            <SwiperSlide>
              <ProductsSlideBox id="swiper-slide">
                <img src="../../assets/product-6.png" alt="" />
                <h3>fresh avocado</h3>
                <div className="price">$4.99/- - 10.99/-</div>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </ProductsSlideBox>
            </SwiperSlide>
            <SwiperSlide>
              <ProductsSlideBox id="swiper-slide">
                <img src="../../assets/product-7.png" alt="" />
                <h3>fresh carrot</h3>
                <div className="price">$4.99/- - 10.99/-</div>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </ProductsSlideBox>
            </SwiperSlide>
            <SwiperSlide>
              <ProductsSlideBox id="swiper-slide">
                <img src="../../assets/product-8.png" alt="" />
                <h3>green lemon</h3>
                <div className="price">$4.99/- - 10.99/-</div>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </ProductsSlideBox>
            </SwiperSlide>
          </div>
        </ProductSliderContainer>
      </Swiper>
    </ProductSection>
  );
};

export default Products;
