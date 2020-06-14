import React from "react";
import s from './AlbumArea.module.scss';
import Album from "./album";


const AlbumArea = (props) => {
    return (
            <div className={s.albumArea} onClick={() => alert("sdsdada")}>
                <Album />
                <p>{props.name}</p>
            </div>
    );
};

export default AlbumArea;