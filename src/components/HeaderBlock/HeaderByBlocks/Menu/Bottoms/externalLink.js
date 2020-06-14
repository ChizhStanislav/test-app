import React from "react";
import s from './../HeaderMiddleBottom.module.scss';
import {NavLink} from "react-router-dom";

const ExternalLink = (props) => {

    return (
        <div className={s.dropRef}>
            <NavLink to={props.link.path}>{props.link.value}</NavLink>
        </div>
    );
};

export default ExternalLink;