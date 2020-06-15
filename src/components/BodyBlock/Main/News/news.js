import React from "react";
import s from './News.module.scss';
import NewsModule from "./newsModule";


let countDate = (holidayDay, currentDay) => {

    let holiday = new Date(holidayDay);
    let holidayData = holiday.getDate();
    let holidayMonth = holiday.getMonth() + 1;
    let holidayYear = holiday.getFullYear();

    let current = new Date(currentDay);
    let currentData = current.getDate();
    let currentMonth = current.getMonth() + 1;
    let currentYear = current.getFullYear();

    if (holidayData === currentData && holidayMonth === currentMonth && holidayYear === currentYear) {
        return true;
    } else {
        return false;
    }
};


const News = (props) => {

    let today = [];
    let tomorrow = [];
    let dayAfterTomorrow = [];
    let afterDayAfterTomorrow = [];
    let afterAfterDayAfterTomorrow = [];


    let afterDayAfterTomorrow1 = new Date(new Date().getTime() + 72 * 60 * 60 * 1000);
    let newsModuleFour = ("0" + afterDayAfterTomorrow1.getDate()).slice(-2) + '.' +
        ("0" + (afterDayAfterTomorrow1.getMonth() + 1)).slice(-2);

    let afterAfterDayAfterTomorrow2 = new Date(new Date().getTime() + 96 * 60 * 60 * 1000);
    let newsModuleFive = ("0" + afterAfterDayAfterTomorrow2.getDate()).slice(-2) + '.' +
        ("0" + (afterAfterDayAfterTomorrow2.getMonth() + 1)).slice(-2);



    props.holidays.map(holiday => {
        if (countDate(holiday.date, new Date())) {
            today.push(holiday);
        } else if (countDate(holiday.date, new Date(new Date().getTime() + 24 * 60 * 60 * 1000))) {
            tomorrow.push(holiday);
        } else if (countDate(holiday.date, new Date(new Date().getTime() + 48 * 60 * 60 * 1000))) {
            dayAfterTomorrow.push(holiday);
        } else if (countDate(holiday.date, new Date(new Date().getTime() + 72 * 60 * 60 * 1000))) {
            afterDayAfterTomorrow.push(holiday);
        } else if (countDate(holiday.date, new Date(new Date().getTime() + 96 * 60 * 60 * 1000))) {
            afterAfterDayAfterTomorrow.push(holiday);
        }
    })

    return (
        <div className={s.cover}>
            <NewsModule day='Сегодня' color='darkred' data={today}/>
            <NewsModule day='Завтра' color='blue' data={tomorrow}/>
            <NewsModule day='Послезавтра' color='green' data={dayAfterTomorrow}/>
            <NewsModule day={newsModuleFour} color='black' data={afterDayAfterTomorrow}/>
            <NewsModule day={newsModuleFive} color='black' data={afterAfterDayAfterTomorrow}/>
        </div>

    );
};

export default News;