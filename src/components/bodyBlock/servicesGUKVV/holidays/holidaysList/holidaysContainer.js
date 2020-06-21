import {connect} from "react-redux";
import {removeHoliday, setHolidays, toggleIsFetching} from "../../../../../redux/reducers/holidaysReducer";
import React from "react";
import * as axios from "axios";
import Holidays from "./holidays";
import Preloader from "../../../../common/preloader";

class HolidaysContainer extends React.Component {

    ageToString = (age) => {
        let txt;
        let count = age % 100;
        if (count >= 5 && count <= 20) {
            txt = 'лет';
        } else {
            count = count % 10;
            if (count === 1) {
                txt = 'год';
            } else if (count >= 2 && count <= 4) {
                txt = 'года';
            } else {
                txt = 'лет';
            }
        }
        return age + ' ' + txt;
    };

    formatDateConvert = (date) => {

        let burn = new Date(date);
        let burnDay = burn.getDate();
        let burnMonth = burn.getMonth() + 1;
        let burnYear = burn.getFullYear();
        return burnDay + '.' + ('0' + burnMonth).slice(-2) + '.' + burnYear;
    };

    quantityYear = (date) => {
        let todayYear = new Date().getFullYear();
        let burnYear = new Date(date).getFullYear();
        let quantityYear = todayYear - burnYear;
        if (quantityYear !== 0) {
            return this.ageToString(quantityYear);
        }
    };

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get("http://localhost:8081/holiday")
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setHolidays(response.data)
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Holidays holidays={this.props.holidays}
                      formatDateConvert={this.formatDateConvert}
                      quantityYear={this.quantityYear}
                      updateHoliday={this.updateHoliday}
                      removeHoliday={this.removeHoliday}
            />
        </>
    };
};


let mapStateToProps = (state) => {
    return {
        holidays: state.holidaysPage.holidays,
        isFetching: state.holidaysPage.isFetching
    }
};

export default connect(mapStateToProps, {removeHoliday, setHolidays, toggleIsFetching})(HolidaysContainer);