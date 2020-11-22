import React from 'react';

import links from './content';
import getThemeColor from '../../utils/getThemeColor';
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
          <MenuLinksLink 
            cover 
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
            to={link.url} 
            activeClassName="active">
              {link.label}
          </MenuLinksLink>
        </MenuLinksItem>
      ))}
    </MenuLinksList>
  </MenuLinksWeapper>
);

export default MenuLinks;
