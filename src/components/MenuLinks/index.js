import React from 'react';

import links from './content';

import {
  MenuLinksWeapper,
  MenuLinksList,
  MenuLinksItem,
  MenuLinksLink,
} from './styles';

const MenuLinks = () => (
  <MenuLinksWeapper>
    <MenuLinksList>
      {links.map((link, i) => (
        <MenuLinksItem key={i}>
          <MenuLinksLink to={link.url} activeClassName="active">
            {link.label}
          </MenuLinksLink>
        </MenuLinksItem>
      ))}
    </MenuLinksList>
  </MenuLinksWeapper>
);

export default MenuLinks;
