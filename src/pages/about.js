import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

export default () => 

<Layout>
    <Title pageName="About me" />

    <p>I am a user forcused frontend developer (2yrs) and UI/UX designer(9yrs).</p>
    <p>Because of my broad skillset, I can infer the details of a design from high level visuals and continue the design process into the code.</p>
    <p>I get excited about accessible HTML, flexible CSS and performant vanilla JavaScript. Smooth rendering and great looking layouts at all sizes are my  baseline of quality.</p>
    <Link to="/">{`<- home`}</Link>

</Layout>