import React from "react";
import s from './ServiceOfGUKVV.module.scss';
import {NavLink} from "react-router-dom";


const ServiceOfGUKVV = (props) => {
    return (
        <div className={s.cover}>
            <div className={s.areaServiceOfGUKVV}>
                <div className={s.image}>
                    <img src={props.imagePath} alt=''></img>
                </div>
                <div className={s.text}>
                    <NavLink to={props.link}>{props.text}</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServiceOfGUKVV;