import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100vh;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);  
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
  display: block;
`;

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  transition: color 0.4s;

  &.light {
    color: #d4d400;
    
    &:hover {
      color: #e2e240;
    }
  }

  &:hover {
    color: var(--highLight);
  }
`;