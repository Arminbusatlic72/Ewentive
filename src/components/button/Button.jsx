import React from 'react'
import projectStyles from './button.module.scss'
import {Link} from "gatsby"

const Button = (props) => {
    return <Link className={projectStyles.btn} to={props.link}>{props.children}</Link>
}
export default Button