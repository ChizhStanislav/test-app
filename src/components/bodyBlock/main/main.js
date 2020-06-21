import React from "react";
import s from './Main.module.scss';
import NewsContainer from "./news/newsContainer";
import GeneralArea from "./general/generalArea";


const Main = () => {
    return (
        <div className={s.cover}>
            <GeneralArea />
            <NewsContainer />
        </div>
    );
};

export default Main;