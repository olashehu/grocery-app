/** @format */

import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 9%;
  background: #fff;
  box-shadow: var(--box-shadow);

  @media (max-width: 991px) {
    padding: 2rem;

    & .navbar {
      position: absolute;
      top: 110%;
      right: ${(props) => (props.showNavbar ? "2rem" : "-110%")};
      width: 30rem;
      box-shadow: var(--box-shadow);
      border-radius: 0.5rem;
      background: #fff;
      transition: 0.4s linear;
    }
  }
`;

export const Logo = styled.a`
  font-size: 2.5rem;
  font-weight: bolder;
  color: var(--black);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .logoIcon {
    color: var(--orange);
    margin-right: 0.5rem;
  }
`;

export const NavbarLink = styled.a`
  font-size: 1.7rem;
  margin: 0 1rem;
  color: var(--black);

  &:hover {
    color: var(--orange);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 2rem 2.5rem;
    display: block;
  
  }
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 130px;

  & .icons {
    height: 2.3rem;
    width: 2.3rem;
    line-height: 4.5rem;
    border-radius: 0.5rem;
    background-color: #eee;
    color: var(--black);
    font-size: 2rem;
    margin-left: 0.3rem;
    cursor: pointer;
    text-align: center;

    &:hover {
      background: var(--orange);
      color: #fff;
    }
  }

  & #menu-btn {
    display: none;
    @media (max-width: 768px) {
      display: inline-block;
    }
  }
`;
