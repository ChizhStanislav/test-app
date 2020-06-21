import React from "react";
import s from './Album.module.scss';


const Album = (props) => {
    return (
            <div className={s.albumArea} onClick={() => alert("sdsdada")}>
                <div className={s.album}>
                    FOTO
                </div>
                <p>{props.name}</p>
            </div>
    );
};

export default Album;