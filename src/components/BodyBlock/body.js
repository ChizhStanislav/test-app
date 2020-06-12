import React from "react";
import BodyTitle from "./bodyTitle";
import BodyContent from "./bodyContent";
import s from './Body.module.scss';


const Body = () => {
    return (
        <div className={s.cover}>
            <BodyTitle/>
            <BodyContent/>
        </div>
    );
};

export default Body;