import React from "react";
import s from './HeaderMiddleImage.module.scss';
import logo from './icon.png';
import {NavLink} from "react-router-dom";


const HeaderMiddleImage = () => {
    return (
        <div className={s.cover}>
            <NavLink to='/main'><img src={logo} alt="Main"></img></NavLink>
        </div>
    );
};

export default HeaderMiddleImage;