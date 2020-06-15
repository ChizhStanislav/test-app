import React from "react";
import s from './News.module.scss';
import NewsModule from "./newsModule";

let holidayToDay = (holiday, days) => {
    let dayOneWithTime = new Date(new Date().getTime());
    let dayTwoWithTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    let dayThreeWithTime = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
    let dayFourWithTime = new Date(new Date().getTime() + 72 * 60 * 60 * 1000);
    let dayFiveWithTime = new Date(new Date().getTime() + 96 * 60 * 60 * 1000);

    let dayOne = dayOneWithTime.getFullYear() + '-' + ("0" + (1 + dayOneWithTime.getMonth())).slice(-2) + '-' + dayOneWithTime.getDate();
    let dayTwo = dayTwoWithTime.getFullYear() + '-' + ("0" + (1 + dayTwoWithTime.getMonth())).slice(-2) + '-' + dayTwoWithTime.getDate();
    let dayThree = dayThreeWithTime.getFullYear() + '-' + ("0" + (dayThreeWithTime.getMonth() + 1)).slice(-2) + '-' + dayThreeWithTime.getDate();
    let dayFour = dayFourWithTime.getFullYear() + '-' + ("0" + (dayFourWithTime.getMonth() + 1)).slice(-2) + '-' + dayFourWithTime.getDate();
    let dayFive = dayFiveWithTime.getFullYear() + '-' + ("0" + (dayFiveWithTime.getMonth() + 1)).slice(-2) + '-' + dayFiveWithTime.getDate();

    switch (holiday.date) {
        case dayOne:
            days.today.push(holiday);
            break;
        case dayTwo:
            days.tomorrow.push(holiday);
            break;
        case dayThree:
            days.dayAfterTomorrow.push(holiday);
            break;
        case dayFour:
            days.afterDayAfterTomorrow.push(holiday);
            break;
        case dayFive:
            days.afterAfterDayAfterTomorrow.push(holiday);
            break;
        default:
            break;
    }
};

let dayAndMonth = (daysAfter = 0) => {
    let hour = daysAfter * 24;
    let date = new Date(new Date().getTime() + hour * 60 * 60 * 1000);
    return ("0" + date.getDate()).slice(-2).concat('.').concat(("0" + (date.getMonth() + 1)).slice(-2));
};

const News = (props) => {

    let days = {
        today: [],
        tomorrow: [],
        dayAfterTomorrow: [],
        afterDayAfterTomorrow: [],
        afterAfterDayAfterTomorrow: []
    }

    props.holidays.map(holiday => holidayToDay(holiday, days));

    return (
        <div className={s.cover}>
            <NewsModule day={dayAndMonth()} color='darkred' data={days.today}/>
            <NewsModule day={dayAndMonth(1)} color='blue' data={days.tomorrow}/>
            <NewsModule day={dayAndMonth(2)} color='green' data={days.dayAfterTomorrow}/>
            <NewsModule day={dayAndMonth(3)} color='black' data={days.afterDayAfterTomorrow}/>
            <NewsModule day={dayAndMonth(4)} color='black' data={days.afterAfterDayAfterTomorrow}/>
        </div>

    );
};

export default News;