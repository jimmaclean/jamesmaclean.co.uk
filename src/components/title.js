import React from "react"
import Helmet from 'react-helmet'

export default (props) =>
<React.Fragment>
    <Helmet>
        <title>{props.pageName}</title>
    </Helmet>
    <h1>{props.pageName}</h1>
</React.Fragment>