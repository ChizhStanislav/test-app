import React from "react";
import s from './HeaderMiddleBottom.module.scss';
import BottomMenu from "./bottoms/bottomMenu";

const HeaderMiddleBottom = (props) => {

    let linkJSX = props.menu.map((link) => <BottomMenu link={link} />);

    return (
        <div className={s.cover}>
            {linkJSX}
        </div>
    );
};

export default HeaderMiddleBottom;