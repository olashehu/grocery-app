/** @format */

import styled from "styled-components";

export const CartWrapper = styled.div`
  position: absolute;
  top: 110%;
  right: ${(props) => (props.show ? "2rem" : "-185%")};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  width: 35rem;
  background: #fff;

  .total {
    font-size: 2.5rem;
    padding: 1rem 0;
    text-align: center;
    color: var(--black);
  }

  .btn {
    display: block;
    text-align: center;
    margin: 1rem;
  }
`;

export const CartBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  margin: 1rem 0;

  .trash-icon {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    right: 2rem;
    cursor: pointer;
    color: var(--light-color);
    transform: translateY(-50%);

    &:hover {
      color: var(--orange);
    }
  }
  .quatity {
    padding-left: 1rem;
  }

  img {
    height: 10rem;
  }

  h3 {
    color: var(--black);
    font-size: 1.7rem;
    padding-bottom: 1rem;
  }

  span {
    color: var(--light-color);
    font-size: 1.6rem;
  }
`;