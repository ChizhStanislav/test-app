import React from "react";
import s from './ServicesMVDRB.module.scss';
import {NavLink} from "react-router-dom";
import * as axios from "axios";


class ServicesMVDRB extends React.Component {

    componentDidMount() {
        axios.get("")
            .then(response => {
               this.props.setServicesMVDRB();
            });
    }

    render() {
        return (
            <div className={s.cover1}>
                {
                    this.props.services.map(service =>
                        <div className={s.cover}>
                            <div className={s.areaServiceOfMVDRB}>
                                <div className={s.image}>
                                    <img src={service.imagePath} alt=''/>
                                </div>
                                <div className={s.text}>
                                    <NavLink to={service.link}>{service.text}</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
};

export default ServicesMVDRB;