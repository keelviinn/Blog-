import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/Layout';
import SEO from '../components/seo';

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  
  return (
    <Layout>
        <SEO title={post.frontmatter.title} />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
    }
  }
`