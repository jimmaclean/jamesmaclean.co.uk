import React from "react";
import Layout from "../components/layouts/layout";
import Title from "../components/title";
import { graphql, Link } from "gatsby";

const BlogIndex = ({ data }) => {
  const { edges } = data.allMdx;
  return (
    <Layout>
      <Title pageName="Writing practice" />
      <ul>
        {edges.map((edge) => {
          const { frontmatter } = edge.node;
          return frontmatter.tags.includes("Writing practice") ? (
            <li key={frontmatter.path} className="m-b-3">
              <Link to={frontmatter.path}>
                <h3 className="m-0">{frontmatter.title}</h3>
                <p className="m-0">{frontmatter.excerpt}</p>
                <p className="m-0">
                  Tags: {frontmatter.tags.map((tag) => `[${tag}] `)}
                </p>
              </Link>
            </li>
          ) : null;
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
            tags
          }
        }
      }
    }
  }
`;

export default BlogIndex;
