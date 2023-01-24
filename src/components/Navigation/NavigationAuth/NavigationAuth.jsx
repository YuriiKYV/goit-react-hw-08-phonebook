import { NavLink } from "react-router-dom";
import css from '../NavigationAuth/NavigationAuth.module.css';

const getClassName = ({ isActive }) => {
    return isActive ? `${css.navigationAuthLink} ${css.navigationAuthLinkActive}` : css.navigationAuthLink;
}

export default function NavigationAuth() {
    return (
        <div className={css.navigationAuth}>
            <NavLink className={getClassName} to="/register">Register</NavLink>
            |
            <NavLink className={getClassName} to="/login">Login</NavLink>
        </div>
    )
}
