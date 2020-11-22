import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import getThemeColor from '../../utils/getThemeColor';
import {
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription,
} from './styles';

import Avatar from '../Avatar';

export default function Profile() {
  const {
    site: {
      siteMetadata: { title, position, description, age },
    },
  } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            position
            description
            age
          }
        }
      }
    `
  );

  return (
    <ProfileWrapper>
      <ProfileLink cover direction="left" bg={getThemeColor()} duration={0.6} to="/">
        <Avatar />
        <ProfileAuthor>
          {title}
          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor>
      </ProfileLink>
      <ProfileDescription>{description}</ProfileDescription>
    </ProfileWrapper>
  );
}
