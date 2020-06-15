import React from "react";
import s from './PhotoGallery.module.scss';
import AlbumArea from "./albums/albumArea";


const PhotoGallery = () => {
    return (
        <div className={s.cover}>
            <AlbumArea name='Альбом'/>
            <AlbumArea name='Альбом'/>
            <AlbumArea name='Альбом'/>
            <AlbumArea name='Альбом'/>
            <AlbumArea name='Альбом'/>
            <AlbumArea name='Альбом'/>
            <AlbumArea name='Альбом'/>
            <AlbumArea name='Альбом'/>
            <AlbumArea name='Альбом'/>
            <AlbumArea name='Альбом'/>
            <AlbumArea name='Альбом'/>
            <AlbumArea name='Альбом'/>
        </div>

    );
};

export default PhotoGallery;