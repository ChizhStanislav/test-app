import React from "react";
import s from './Body.module.scss';
import {Route} from "react-router-dom";
import Main from "./main/main";
import ServicesGUKVVContainer from "./servicesGUKVV/services/servicesGUKVVContainer";
import ServicesMVDRBContainer from "./servicesMVDRB/services/servicesMVDRBContainer";
import PhotoGallery from "./photoGallery/photoGallerry";
import HolidaysBody from "./servicesGUKVV/holidays/holidaysBody";



const Body = () => {
    return (
        <div className={s.cover}>
            <Route path='/main' render={() => <Main />} />
            <Route path='/servicesGUKVV' render={() => <ServicesGUKVVContainer />} />
            <Route path='/servicesMVDRB' render={() => <ServicesMVDRBContainer  />} />
            <Route path='/photoGallery' render={() => <PhotoGallery />} />
            <Route path='/holidaysBody' render={() => <HolidaysBody />} />
        </div>
    );
};

export default Body;