import preloading from "../../images/preloading.svg";
import React from "react";
import s from "./Preloader.module.scss"


let Preloader = (props) => {
    return (
        <div className={s.cover}>
            <img src={preloading}/>
        </div>
    )
}

export default Preloader;