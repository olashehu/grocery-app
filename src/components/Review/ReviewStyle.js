/** @format */

import styled from "styled-components";

export const ReviewWrapper = styled.div`
  padding: 1rem;
`;

export const ReviewBoxWrapper = styled.div`
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

  .stars {
    color: var(--orange);
    font-size: 1.7rem;
  }
`;

export const ReviewImage = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
`;

export const ReviewBodyText = styled.p`
  padding: 1rem 0;
  line-height: 1.8;
  color: var(--light-color);
  font-size: 1.5rem;
`;

export const ReviewName = styled.h3`
  padding-bottom: 0.5rem;
  color: var(--black);
  font-size: 2.2rem;
`;