

import styled from 'styled-components';

export const BlogBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
`;

export const BlogBox = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  background: #fff;
`;

export const BlogImage = styled.img`
  height: 25rem;
  width: 100%;
  object-fit: cover;
`;

export const BlogContent = styled.div`
  padding: 2rem;
`;

export const BlogIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: var(--border);

  a {
    color: var(--light-color);
    font-size: 1.5rem;

    &:hover {
      color: var(--black);
    }

    i {
      color: var(--orange);
      padding-right: 0.5rem;
    }
  }
`;

export const BlogHeader = styled.h3`
  line-height: 1.8;
  color: var(--black);
  font-size: 2.2rem;
  padding: 0.5rem 0;
`;

export const BlogText = styled.p`
  line-height: 1.8;
  color: var(--light-color);
  font-size: 1.5rem;
  padding: 0.5rem 0;
`;