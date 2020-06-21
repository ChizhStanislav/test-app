import React from "react";
import s from './Header.module.scss';
import TopPanelContainer from "./topPanel/TopPanelContainer";
import {NavLink} from "react-router-dom";
import logo from "../../images/icon.png";


const Header = () => {
    return (
        <div className={s.cover}>
            <div className={s.top}/>
            <div className={s.bottom}/>
            <div className={s.middle}>
                <div className={s.image}>
                    <NavLink to='/main'><img src={logo} alt="Main"/></NavLink>
                </div>
                <div className={s.title}>
                    <h2>Главное управление командующего внутренними войсками МВД РБ</h2>
                    <h3>Информационно-справочная система</h3>
                </div>
                <TopPanelContainer />
            </div>
        </div>
    );
};

export default Header;