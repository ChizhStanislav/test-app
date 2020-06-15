import React from "react";
import s from './HeaderMiddleTop.module.scss';


const HeaderMiddleTop = () => {
    return (
        <div className={s.cover}>
            <h2>Главное управление командующего внутренними войсками МВД РБ</h2>
            <h3>Информационно-справочная система</h3>
        </div>
    );
};

export default HeaderMiddleTop;