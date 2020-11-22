import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  height: 100vh;
  width: 20rem;
  position: fixed;
  padding: 2rem;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);

  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`;
