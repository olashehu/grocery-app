/** @format */

import styled from "styled-components";

export const CategoriesBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 1.5rem;
`;

export const CategoriesBox = styled.div`
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: var(--box-shadow);
  outline: var(--outline);
  outline-offset: -1rem;
  text-align: center;

  &:hover {
    outline: var(--outline-hover);
    outline-offset: 0rem;
  }
`;

export const CategoriesImage = styled.img`
  margin: 1rem 0;
  height: 15rem;
`;

export const CategoriesImageText = styled.h3`
  font-size: 2rem;
  color: var(--black);
  line-height: 1.8;
`;

export const CategoriesImageSubText = styled.p`
  font-size: 1.7rem;
  color: var(--light-color);
  line-height: 1.8;
  padding: 1rem 0;
`;
