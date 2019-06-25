import React from "react"
import "./layout.css"
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';


const query = graphql`
query {
    site {
        siteMetadata {
        description
        title
        }
    }
}
`;

export default ({ children }) => 


<React.Fragment>

    <StaticQuery 
        query= {query}
        render = {data => 
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
                <meta name="description" content={data.site.siteMetadata.description}/>
                <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Oxygen|Radley" type="text/css" />
            </Helmet>
        }
    /> 

 
    <div className="wrap">
        {children} 
    </div>

</React.Fragment>
