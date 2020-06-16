import React from "react";
import s from './Body.module.scss';
import {Route} from "react-router-dom";
import Main from "./main/main";
import ServiceOfGUKVVBody from "./serviceOfGUKVV/serviceOfGUKVVBody";
import ServiceOfMVDRB from "./serviceOfMVDRB/serviceOfMVDRB";
import PhotoGallery from "./photoGallery/photoGallerry";



const Body = (props) => {
    return (
        <div className={s.cover}>
            <Route path='/main' render={() => <Main holidays={props.data} />} />
            <Route path='/serviceOfGUKVV' render={() => <ServiceOfGUKVVBody services={props.data.servicesGUKVV} />} />
            <Route path='/serviceOfMVDRB' render={() => <ServiceOfMVDRB />} />
            <Route path='/photoGallery' render={() => <PhotoGallery />} />
        </div>
    );
};

export default Body;