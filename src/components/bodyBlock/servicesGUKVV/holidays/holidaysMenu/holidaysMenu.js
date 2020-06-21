import React from "react";
import s from './HolidaysMenu.module.scss';
import CreateHoliday from "../holidaysList/body/createHoliday";



const HolidaysMenu = (props) => {

    return (
        <div className={s.cover}>
           <CreateHoliday />
        </div>
    );
};

export default HolidaysMenu;