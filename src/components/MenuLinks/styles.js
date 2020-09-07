import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuLinksWeapper = styled.nav`
  
`;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--highLight);
  }
`;

export const MenuLinksLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highLight);
  }
`;