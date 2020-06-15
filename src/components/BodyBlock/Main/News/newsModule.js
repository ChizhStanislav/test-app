import React from "react";
import s from './NewsModule.module.scss';


const NewsModule = (props) => {

    let listHoliday = props.data.map(holiday => {
        if (holiday.position === '') {
            return <p>{holiday.holiday}</p>
        } else {
            return (
                <>
                    <p>{holiday.holiday}</p>
                    <p>{holiday.position}</p>
                </>
            );
        }
    })

    return (
        <div className={s.cover} style={{color: props.color}}>
            <h5>{props.day}</h5>
            {listHoliday}
        </div>

    );
};

export default NewsModule;