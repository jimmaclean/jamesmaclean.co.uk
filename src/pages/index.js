import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

export default () =>
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
    <Link to="/about">About me</Link>

</Layout>
