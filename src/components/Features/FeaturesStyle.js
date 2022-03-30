

import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
`;

export const ContainerBox = styled.div`
  padding: 3rem 2rem;
  background: #fff;
  outline: var(--outline);
  outline-offset: -1rem;
  text-align: center;
  box-shadow: var(--box-shadow);

  &:hover {
    outline: var(--outline-hover);
    outline-offset: 0rem;
  }

  img {
    height: 15rem;
    margin: 1rem 0;
  }
  h3 {
    color: var(--black);
    font-size: 2.5rem;
    line-height: 1.8;
  }

  p {
    padding: 1rem 0;
    color: var(--light-color);
    font-size: 1.5rem;
    line-height: 1.8;
  }
`;