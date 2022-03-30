/** @format */

import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(../../assets/banner-bg.webp) no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 17rem;
  padding-bottom: 10rem;
`;

export const HeroSectionContentWrapper = styled.div`
  text-align: center;
  width: 60rem;

  h3 {
    color: var(--black);
    font-size: 3rem;

    span {
      color: var(--orange);
    }
  }

  p {
    color: var(--light-color);
    font-size: 1.7rem;
    padding: 1rem 0;
    line-height: 1.8;
  }
`;
