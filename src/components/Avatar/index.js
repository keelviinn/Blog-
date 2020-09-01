import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { AvatarWrapper } from './styled'

export default function Avatar() {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}