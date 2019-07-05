import React from 'react'
import {Link} from 'gatsby'

const GlobalNav = ({menuLinks}) => {

    return (
        <nav className="wrap">
            <ul>
                {menuLinks.map(link => (
                    <li key={link.name}>
                        <Link to={link.link} activeClassName="active">
                            {link.name}
                        </Link>
                    </li>
                ))}

            </ul>
        </nav>
    )

}

export default GlobalNav
