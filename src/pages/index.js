import React from "react";

import PostItem from '../components/PostItem';
import Layout from "../components/Layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem />  
  </Layout>
)

export default IndexPage
