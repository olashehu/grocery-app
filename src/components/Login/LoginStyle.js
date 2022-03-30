/** @format */

import styled from "styled-components";

export const LoginForm = styled.form`
  position: absolute;
  top: 110%;
  right: ${(props) => (props.isLogin ? "2rem" : "-185%")};
  width: 35rem;
  box-shadow: var(--box-shadow);
  padding: 2rem;
  border-radius: 0.5rem;
  background: #fff;
  text-align: center;
  transition: 0.4s linear;

  h3 {
    font-size: 2.5rem;
    text-transform: uppercase;
    color: var(--black);
  }

  p {
    font-size: 1.4rem;
    padding: 0.5rem 0;
    color: var(--light-color);

    a {
      color: var(--orange);
      text-decoration: underline;
    }
  }
`;

export const LoginInput = styled.input`
  width: 100%;
  margin: 0.7rem 0;
  background: #eee;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.6rem;
  color: var(--black);
  text-transform: none;
`;
