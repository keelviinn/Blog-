import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from '../Avatar'

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
    <div className="Profile-wrapper">
      <Avatar />
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  )
}
