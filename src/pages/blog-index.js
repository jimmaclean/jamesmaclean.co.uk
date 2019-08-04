import React from "react";
import Layout from "../components/layouts/layout";
import Title from "../components/title";
import { graphql, Link } from "gatsby";

const BlogIndex = ({ data }) => {
  const { edges } = data.allMdx;
  return (
    <Layout>
      <Title pageName="Blog" />
      <ul>
        {edges.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <li key={frontmatter.path}>
              <Link to={frontmatter.path}>
                <h3 className="m-0">{frontmatter.title}</h3>
                <p>{frontmatter.excerpt}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx(sort: { order: ASC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            date
            path
            title
            excerpt
          }
        }
      }
    }
  }
`;

export default BlogIndex;
