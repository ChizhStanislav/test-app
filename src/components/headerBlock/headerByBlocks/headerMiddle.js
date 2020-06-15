import React from "react";
import s from './HeaderMiddle.module.scss';
import HeaderMiddleImage from "./image/headerMiddleImage";
import HeaderMiddleTop from "./title/headerMiddleTop";
import HeaderMiddleBottom from "./menu/HeaderMiddleBottom";


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