import React from "react";
import HeaderMenu from "./headerMenu";
import s from './Header.module.scss';


const Header = () => {
    return (
        <div className={s.cover}>
            <h1 className={s.header}>Главное управление командующего внутренними войсками МВД РБ</h1>
            <p className={s.decr}>Информационно-справочная система</p>
            <HeaderMenu/>
        </div>
    );
};

export default Header;