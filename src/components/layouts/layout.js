import React from "react";
import "../styles/main.scss";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import GlobalNav from "./navigation";

const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
        menuLinks {
          name
          link
        }
      }
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { title, description, menuLinks } = data.site.siteMetadata;

        return (
          <React.Fragment>
            <Helmet>
              <title>{title}</title>
              <meta name="description" content={description} />
              <link
                rel="stylesheet"
                href="//fonts.googleapis.com/css?family=Oxygen|Radley"
                type="text/css"
              />
            </Helmet>

            <GlobalNav menuLinks={menuLinks} />

            <div className="wrap">{children}</div>
          </React.Fragment>
        );
      }}
    />
  );
};

export default Layout;
