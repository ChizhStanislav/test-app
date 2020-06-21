import React from "react";
import s from './PhotoGallery.module.scss';
import Album from "./albums/album";


const PhotoGallery = () => {
    return (
        <div className={s.cover}>
            <Album name='Альбом'/>
            <Album name='Альбом'/>
            <Album name='Альбом'/>
            <Album name='Альбом'/>
            <Album name='Альбом'/>
            <Album name='Альбом'/>
            <Album name='Альбом'/>
            <Album name='Альбом'/>
            <Album name='Альбом'/>
            <Album name='Альбом'/>
            <Album name='Альбом'/>
            <Album name='Альбом'/>
        </div>

    );
};

export default PhotoGallery;