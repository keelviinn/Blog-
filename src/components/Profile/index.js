import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { 
  ProfileWrapper, 
  ProfileLink, 
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription
} from './styled';

import Avatar from '../Avatar';

export default function Profile() {
  const { 
    site: {
      siteMetadata: {
        title,
        position,
        description
      },
    }, 
  } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `
  )

  return (
    <ProfileWrapper>
      <ProfileLink>
        <Avatar />
        <ProfileAuthor>
          {title}
          <ProfilePosition>
            {position}
          </ProfilePosition>
        </ProfileAuthor>        
      </ProfileLink>      
      <ProfileDescription>{description}</ProfileDescription>
    </ProfileWrapper>
  )
}
