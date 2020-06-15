import React from "react";
import s from './Header.module.scss';
import HeaderTop from "./headerByBlocks/headerTop";
import HeaderBottom from "./headerByBlocks/headerBottom";
import HeaderMiddle from "./headerByBlocks/headerMiddle";


const Header = (props) => {
    return (
        <div className={s.cover}>
            <HeaderTop />
            <HeaderBottom />
            <HeaderMiddle menu={props.menu}/>
        </div>
    );
};

export default Header;