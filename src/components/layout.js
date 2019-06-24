import React from "react"
import "./layout.css"
import {Helmet} from 'react-helmet';

export default ({ children }) => 
<React.Fragment>

    <Helmet>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Oxygen|Radley" type="text/css" />
    </Helmet>   

    <div className="wrap">
        {children} 
    </div>

</React.Fragment>
