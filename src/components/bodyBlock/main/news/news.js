import React from "react";
import s from './News.module.scss';
import NewsModule from "./newsModule";

class News extends React.Component {

    days = {
        today: [],
        tomorrow: [],
        dayAfterTomorrow: [],
        afterDayAfterTomorrow: [],
        afterAfterDayAfterTomorrow: []
    };

    holidayToDay = (holiday, days) => {
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

        switch (holiday.birthDay) {
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

    dayAndMonth = (daysAfter = 0) => {
        let hour = daysAfter * 24;
        let date = new Date(new Date().getTime() + hour * 60 * 60 * 1000);
        return ("0" + date.getDate()).slice(-2).concat('.').concat(("0" + (date.getMonth() + 1)).slice(-2));
    };

    render() {
        this.props.holidays.map(holiday => this.holidayToDay(holiday, this.days));
    return (
        <div className={s.cover}>
            <div className={s.title}>
                <h2>НОВОСТИ</h2>
            </div>
            <div className={s.cover2}>
                <NewsModule day={this.dayAndMonth()} color='darkred' data={this.days.today}/>
                <NewsModule day={this.dayAndMonth(1)} color='blue' data={this.days.tomorrow}/>
                <NewsModule day={this.dayAndMonth(2)} color='green' data={this.days.dayAfterTomorrow}/>
                <NewsModule day={this.dayAndMonth(3)} color='black' data={this.days.afterDayAfterTomorrow}/>
                <NewsModule day={this.dayAndMonth(4)} color='black' data={this.days.afterAfterDayAfterTomorrow}/>
            </div>
        </div>

    );
    }
};

export default News;