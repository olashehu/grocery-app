import React from 'react'
import styled from 'styled-components';

const Heading = styled.h1`
 text-align: center;
  padding: 2rem 0;
  padding-bottom: 3rem;
  font-size: 3.5rem;
  color: var(--black);
`;

const HeadingContent = styled.span`
  background: var(--orange);
  color: #fff;
  display: inline-block;
  padding: 0.5rem 3rem;
  clip-path: polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%);
`; 

const Header = ({text, subText}) => {
  return (
    <>
      <Heading>
        {subText} <HeadingContent>{text}</HeadingContent>
      </Heading>
    </>
  );
}

export default Header;
