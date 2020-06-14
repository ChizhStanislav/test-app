import React from "react";
import s from './../HeaderMiddleBottom.module.scss';
import {NavLink} from "react-router-dom";

const InnerLink = (props) => {

    let links = props.links.map((link) => <NavLink to={link.path}>{link.value}</NavLink>);

    return (
            <div className={s.dropdownContent}>
                {links}
            </div>
    );
};

export default InnerLink;