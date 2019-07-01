
const path = require('path')

exports.createPages = (({graphql, actions}) => {
    const { createPage } = actions
  
    return new Promise((resolve, reject) => {
      const blogPostTemplate = path.resolve('src/templates/blog-post.js') 
  
      resolve(
        graphql(
          `
          query {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
          
          `
        ).then(result => {

            if (result.errors) {
                console.error(result.errors);
                reject(result.errors);
            }
  
            result.data.allMdx.edges.forEach(({node}) => {
                const path = node.frontmatter.path
                const id = node.id
                createPage({
                    path,
                    component: blogPostTemplate,
                    context: {
                    id: id
                    }
            })
  
            resolve()
          })
        })
      )
    })
  })