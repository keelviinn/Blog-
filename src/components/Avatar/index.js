import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { AvatarWrapper } from './styles';

export default function Avatar() {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return <AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />;
}
