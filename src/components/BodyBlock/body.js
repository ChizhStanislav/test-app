import React from "react";
import s from './Body.module.scss';
import {Route} from "react-router-dom";
import Main from "./Main/main";
import ServiceOfGUKVV from "./ServiceOfGUKVV/serviceOfGUKVV";
import ServiceOfMVDRB from "./ServiceOfMVDRB/serviceOfMVDRB";
import PhotoGallery from "./PhotoGallery/photoGallerry";



const Body = (props) => {
    return (
        <div className={s.cover}>
            <Route path='/main' render={() => <Main />} />
            <Route path='/serviceOfGUKVV' render={() => <ServiceOfGUKVV />} />
            <Route path='/serviceOfMVDRB' render={() => <ServiceOfMVDRB />} />
            <Route path='/photoGallery' render={() => <PhotoGallery />} />
        </div>
    );
};

export default Body;