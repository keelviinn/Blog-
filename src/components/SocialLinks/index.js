import React from 'react';

import Icons from './Icons';
import links from './content';

import {
  SocialLinksWrapper,
  SocialLinksList,
  SocialLinksItem,
  SocialLinksLink,
  IconWrapper,
} from './styles';

const SocialLinks = () => (
  <SocialLinksWrapper>
    <SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label];

        const id = links.map((link, i) => (link.id = i + 1));

        console.log(id);

        return (
          <SocialLinksItem key={id}>
            <SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>
                <Icon />
              </IconWrapper>
            </SocialLinksLink>
          </SocialLinksItem>
        );
      })}
    </SocialLinksList>
  </SocialLinksWrapper>
);

export default SocialLinks;
