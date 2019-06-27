import React from "react"
import "./layout.css"
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';


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

    return  (
        <StaticQuery 
        query= {query}
        render = {data => <React.Fragment>
            
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
                <meta name="description" content={data.site.siteMetadata.description}/>
                <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Oxygen|Radley" type="text/css" />
            </Helmet>
            
            <nav className="wrap">
                <ul>
                    {data.site.siteMetadata.menuLinks.map(link => (
                    <li>
                        <Link to={link.link} activeClassName="active">
                            {link.name}
                        </Link>
                    </li>
                    ))}
  
                </ul>
            </nav>

            <div className="wrap">
                {children} 
            </div>

        </React.Fragment> }/> 


    )
}


export default Layout