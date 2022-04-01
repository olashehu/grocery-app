

import styled from "styled-components";

export const ProductSection = styled.section``;

export const ProductSliderContainer = styled.div`
  padding: 1rem;

  .mySwiper{
    width: 100%;
  }

  @media screen and (max-width: 450px){
    .mySwiper{
      display: flex;
      flex-direction: column;
    }
  }
 
`;

export const ProductsSlideBox = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  text-align: center;
  padding: 3rem 2rem;
  outline-offset: -1rem;
  outline: var(--outline);
  box-shadow: var(--box-shadow);
  transition: 0.2s linear;

  &:hover {
    outline: var(--outline-hover);
    outline-offset: 0rem;
  }

  img {
    height: 20rem;
  }

  h3 {
    font-size: 2.5rem;
    color: var(--black);
  }

  .price {
    font-size: 2rem;
    color: var(--light-color);
    padding: 0.5rem 0;
  }

  .stars {
    padding: 0.5rem 0;
    font-size: 1.7rem;
    color: var(--orange);

  }
`;

