/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `James Maclean`,
    siteUrl: `https://www.jamesmaclean.co.uk`,
    description: `Personal portfolio of James Maclean, showcasing frontend development, UX and UI work.`,
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'about',
        link: '/about',
      },
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ]
}
