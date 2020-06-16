import React from "react";
import s from './ServiceOfGUKVVBody.module.scss';
import ServiceOfGUKVV from "./ServiceOfGUKVV";

const ServiceOfGUKVVBody = (props) => {

    let servicesJSP = props.services.map((service) => <ServiceOfGUKVV link={service.link}
                                                                           text={service.text}
                                                                           imagePath={service.imagePath} />);
    return (
        <div className={s.cover}>
            {servicesJSP}
        </div>
    );
};

export default ServiceOfGUKVVBody;