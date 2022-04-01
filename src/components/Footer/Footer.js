

import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.section`
  background-color: #fff;

  @media screen and (max-width: 450px) {
    text-align: center;
  }
`;

export const FooterBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 1.5rem;
`;

export const FooterBoxHeader = styled.h3`
  font-size: 2.5rem;
  color: var(--black);
  padding: 1rem 0;

  .groco-icon {
    color: var(--orange);
  }
`;

export const SocialIconSWrapper = styled.div`
  .share {
    height: 4rem;
    width: 4rem;
    line-height: 4rem;
    border-radius: 0.5rem;
    font-size: 2rem;
    color: var(--black);
    margin-right: 0.2rem;
    background: #eee;
    text-align: center;

    &:hover {
      background: var(--orange);
      color: #fff;
    }
  }
`;

export const BoxLeftText = styled.p`
  line-height: 1.8;
  font-size: 1.5rem;
  color: var(--light-color);
  padding: 1rem 0;
`;

export const FooterLinks = styled(Link)`
  display: block;
  font-size: 2rem;
  color: var(--light-color);
  padding: 1rem 0;

  &:hover > * {
    padding-right: 1.5rem;
  }

  & > * {
    color: var(--orange);
    padding-right: 0.5rem;
  }
`;

export const EmailInput = styled.input`
  width: 100%;
  margin: 0.7rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #eee;
  font-size: 1.6rem;
  color: var(--black);
  text-transform: none;
`;

export const PaymentImage = styled.img`
  margin-top: 2rem;
  height: 3rem;
  display: block;

  @media screen and (max-width: 450px) {
    margin: 2rem auto;
  }
`;

export const CreditContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  padding-top: 2.5rem;
  font-size: 2rem;
  color: var(--black);
  border-top: var(--border);

  span {
    color: var(--orange);
  }
`;
