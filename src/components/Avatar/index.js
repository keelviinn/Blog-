import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { AvatarWrapper } from './styles';

export default function Avatar() {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `,
  );

  return <AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />;
}
