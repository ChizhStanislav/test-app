import React from "react";
import s from './Holidays.module.scss';
import HolidaysListTitle from "./title/holidaysListTitle";
import edit from "../../../../../images/edit.png";
import remove from "../../../../../images/remove.png";

let Holidays = (props) => {
    return (
        <div className={s.cover}>
            <HolidaysListTitle/>
            {
                props.holidays.map(holiday =>
                    <div className={s.coverHoliday}>
                        <div className={s.data}>
                            <h4>{props.formatDateConvert(holiday.birthDay)}</h4>
                            <p>{holiday.fullName}</p>
                            <p>{holiday.position}</p>
                            <h4 style={{color: 'darkred'}}>{props.quantityYear(holiday.birthDay)}</h4>
                        </div>

                        <div className={s.edit}>
                            <div key={holiday.id}>
                                <img onClick={() => {
                                   props.updateHoliday(holiday.id)
                                }} src={edit} alt='Редактировать'
                                     title='Редактировать'/>
                            </div>
                            <div key={holiday.id}>
                                <img onClick={() => {
                                    props.removeHoliday(holiday.id)
                                }} src={remove} alt='Удалить'
                                     title='Удалить'/>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Holidays;