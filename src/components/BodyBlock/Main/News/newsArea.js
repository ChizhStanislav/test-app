import React from "react";
import s from './NewsArea.module.scss';
import Title from "./title";
import News from "./news";

const NewsArea = (props) => {
    return (
        <div className={s.cover}>
            <Title />
            <News holidays={props.holidays.holidays} />
        </div>

    );
};

export default NewsArea;