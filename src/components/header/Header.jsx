import React from 'react'
import {Link} from "gatsby"
import Menu from '../menu/Menu'
import headerStyles from "./header.module.scss"

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.mobile__header}>
                
            
                <Link className={headerStyles.logo} to="/"><h1 >Marketing for startups </h1><span>by Ewentive</span></Link>
            </div>
            <Menu/>
            
        </header>
    )
}

export default Header