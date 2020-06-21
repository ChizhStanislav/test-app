import React from "react";
import s from './HolidaysBody.module.scss';
import HolidaysMenu from "./holidaysMenu/holidaysMenu";
import HolidaysContainer from "./holidaysList/holidaysContainer";

const HolidaysBody = () => {

    return (
        <div className={s.cover}>
           <HolidaysMenu />
           <HolidaysContainer />
        </div>
    );
};

export default HolidaysBody;