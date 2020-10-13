import React from "react";
import Layout from "../components/layouts/layout";
import Title from "../components/title";
import { graphql, Link } from "gatsby";

const Index = ({ data }) => {
  const { edges } = data.allMdx;

  return (
    <Layout>
      <Title pageName="James Maclean" customClass="m-b-0" />

      <h4 className="subtitle">BA Graphic Design, MA User Experience Design</h4>
      <p>Frontend developer with UI/UX experience.</p>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/jamesmacleanjqim"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/jqim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codepen
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jimmaclean"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="http://portfolioux.s3-website.eu-west-2.amazonaws.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            UX portfolio
          </a>
        </li>
      </ul>
      <h3>Latest blog posts</h3>
      <ul>
        {edges.map((edge) => {
          const { frontmatter } = edge.node;
          return frontmatter.tags.includes("Writing practice") ? null : (
            <li key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
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
            path
            date
            tags
            title
          }
        }
      }
    }
  }
`;
export default Index;
