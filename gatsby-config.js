const path = require("path");
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "James Maclean",
    siteUrl: "https://www.jamesmaclean.co.uk",
    description:
      "Personal portfolio of James Maclean, showcasing frontend development, UX and UI work.",
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "about",
        link: "/about",
      },
      {
        name: "blog index",
        link: "/blog-index",
      },
    ],
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        content: [
          path.join(process.cwd(), "src/**/!(*.d).{ts,js,jsx,tsx,mdx}"),
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
    },
  ],
};
