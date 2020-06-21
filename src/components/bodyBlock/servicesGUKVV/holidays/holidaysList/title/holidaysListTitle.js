import React from "react";
import s from './HolidaysListTitle.module.scss';

const HolidaysListTitle = (props) => {

    let create = () => {

    };

    return (
        <div className={s.cover}>
            <h2>ДНИ РОЖДЕНИЯ И ПРАЗДНИЧНЫЕ ДАТЫ</h2>
            <div onClick={create} className={s.bottom}>
                <h4>Добавить</h4>
            </div>
        </div>
    );
};

export default HolidaysListTitle;