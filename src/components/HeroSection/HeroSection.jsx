import React from 'react'
import { HeroSectionWrapper, HeroSectionContentWrapper } from "./HeroSectionStyle";

const HeroSection = () => {
  return (
    <HeroSectionWrapper id="home">
      <HeroSectionContentWrapper>
        <h3>
          fresh and <span>organic</span> products for your
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum
          veniam facere tempore nisi.
        </p>
        <a href="#" className="btn">
          shop now
        </a>
      </HeroSectionContentWrapper>
    </HeroSectionWrapper>
  );
}

export default HeroSection