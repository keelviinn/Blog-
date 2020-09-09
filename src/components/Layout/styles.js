import Styled from 'styled-components';

export const LayoutWrapper = Styled.section`
  display: flex;
`;

export const LayoutMain = Styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;

  body#grid & {
    grid-template-areas: 
      "posts"
      "pagination"; 
  }
`;
