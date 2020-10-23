import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import Title from "../components/title";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Template = ({ data: { mdx } }) => {
  return (
    <Layout>
      <Title pageName={mdx.frontmatter.title} />
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const blogPageQuery = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
      id
    }
  }
`;
export default Template;
