import React from "react";
import s from './Header.module.scss';
import HeaderTop from "./HeaderByBlocks/headerTop";
import HeaderBottom from "./HeaderByBlocks/headerBottom";
import HeaderMiddle from "./HeaderByBlocks/headerMiddle";


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