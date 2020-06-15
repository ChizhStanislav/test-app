import React from "react";
import s from './../HeaderMiddleBottom.module.scss';
import ExternalLink from "./externalLink";
import InnerLink from "./innerLink";

const BottomMenu = (props) => {

    let innerLink;
    if (props.link.innerLinks.length !== 0) {
        innerLink = <InnerLink links={props.link.innerLinks}/>
    }

    return (
        <div className={s.dropdown}>
            <ExternalLink link={props.link}/>
            {innerLink}
        </div>

    );
};

export default BottomMenu;