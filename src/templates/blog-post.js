import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";
import Title from "../components/title";
import MDXRenderer from "gatsby-mdx/mdx-renderer";

const Template = ({ data: { mdx } }) => {
  return (
    <Layout>
      <Title pageName={mdx.frontmatter.title} />
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </Layout>
  );
};

export const blogPageQuery = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      code {
        body
      }
      frontmatter {
        title
      }
      id
    }
  }
`;
export default Template;
