/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Header from "../../util/SectioonHeader/Header";
import { productData } from "../../data/productData";
import {
  ProductSliderContainer,
  ProductsSlideBox,
  ProductSection,
} from "./ProductsStyled";
import { Link } from "react-router-dom";

const Products = () => {
  SwiperCore.use([Autoplay]);

  return (
    <ProductSection id="products">
      <Header text="Products" subText="Our" />

      <ProductSliderContainer>
        <Swiper
          spaceBetween={40}
          modules={[Navigation]}
          navigation
          loop
          centeredSlides={true}
          grabCursor={true}
          autoplay={{ delay: 7500, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1020: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper">
          {productData.map((data, dataIndex) => (
            <>
              <SwiperSlide className="swiper-slide" key={dataIndex}>
                <ProductsSlideBox id="swiper-slide" key={data.id}>
                  <img src={data.src} alt={data.alt} />
                  <h3>{data.fruitName}</h3>
                  <div className="price">{data.price}</div>
                  <div className="stars">
                    {data.star1}
                    {data.star2}
                    {data.star3}
                    {data.star4}
                    {data.halfStar}
                  </div>
                  <Link to="#" className="btn">
                    {" "}
                    add to cart
                  </Link>
                </ProductsSlideBox>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </ProductSliderContainer>
    </ProductSection>
  );
};

export default Products;
