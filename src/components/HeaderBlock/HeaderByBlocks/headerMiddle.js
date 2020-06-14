import React from "react";
import s from './HeaderMiddle.module.scss';
import HeaderMiddleImage from "./Image/headerMiddleImage";
import HeaderMiddleTop from "./Title/headerMiddleTop";
import HeaderMiddleBottom from "./Menu/HeaderMiddleBottom";


const HeaderMiddle = (props) => {
    return (
        <div className={s.cover}>
            <HeaderMiddleImage />
            <HeaderMiddleTop />
            <HeaderMiddleBottom menu={props.menu}/>
        </div>
    );
};

export default HeaderMiddle;