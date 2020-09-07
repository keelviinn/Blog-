import styled from 'styled-components'

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid var(--borders)ders;
  color: var(--text);
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  a {
    color: var(--text);
    text-decoration: none;
    transition: color 0.5s;
    
    &:hover {
      color: var(--highLight);
    }
  }
`