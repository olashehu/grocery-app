/** @format */

import styled from "styled-components";

export const SearchForm = styled.form`
  position: absolute;
  top: 110%;
  right: ${(props) => (props.isInputShow ? "2rem" : "-220%")};
  width: 50rem;
  height: 5rem;
  background: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: var(--box-shadow);
  transition: ${(props) => (props.isInputShow ? "0.4s linear" : "")};

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  background: none;
  text-transform: none;
  font-size: 1.6rem;
  color: var(--black);
  padding: 0 1.5rem;
`;

export const Label = styled.label`
  font-size: 2.2rem;
  padding-right: 1.5rem;
  color: var(--black);

  .input-icon {
    cursor: pointer;
    &:hover {
      color: var(--orange);
    }
  }
`;
