import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import { graphql } from "gatsby";

const Index = ({data}) => {
    const {edges} = data.allMdx;
    console.log(edges);
    return (
    <Layout>
        <Title pageName="James Maclean"/>
    
        <h4 className="subtitle">BA Graphic Design, MA User Experience Design</h4>
        <p>Freelance frontend developer with extensive UI/UX experience.</p>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/jamesmacleanjqim" target="_blank"  rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
                <a href="https://codepen.io/jqim" target="_blank"  rel="noopener noreferrer">Codepen</a>
            </li>
            <li>
                <a href="https://github.com/jimmaclean" target="_blank"  rel="noopener noreferrer">GitHub</a>
            </li>
        </ul>
    
    </Layout>
    )
} 

export const query = graphql`
    query {
        allMdx {
            edges {
            node {
                frontmatter {
                date
                path
                title
                }
            }
            }
        }
    }
  
`
export default Index
