import React from "react";
import s from './GeneralArea.module.scss';
import Title from "./title";
import General from "./general";


const GeneralArea = () => {
    return (
        <div className={s.cover}>
            <Title />
            <General />
        </div>

    );
};

export default GeneralArea;