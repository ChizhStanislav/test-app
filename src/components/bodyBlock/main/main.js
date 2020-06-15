import React from "react";
import s from './Main.module.scss';
import NewsArea from "./news/newsArea";
import GeneralArea from "./general/generalArea";


const Main = (props) => {
    return (
        <div className={s.cover}>
            <GeneralArea />
            <NewsArea holidays={props.holidays}/>
        </div>
    );
};

export default Main;