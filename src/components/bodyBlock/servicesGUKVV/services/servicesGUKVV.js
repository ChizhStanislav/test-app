import React from "react";
import s from './ServicesGUKVV.module.scss';
import {NavLink} from "react-router-dom";
import holiday from '../../../../images/holiday.png';
import photoGallery from '../../../../images/photoGallery.png';
import referenceInformation from '../../../../images/referenceInformation.png';
import telephoneBook from '../../../../images/telephoneBook.png';
import * as axios from "axios";

class ServicesGUKVV extends React.Component {

    componentDidMount() {
        axios.get("http://localhost:8081/service?typ=SERVICE_GUKVV")
            .then(response => {
               this.props.setServicesGUKVV(response.data);
            });
    }

    render() {
        debugger;
        return (
            <div className={s.cover1}>
                {/*--------------------------------------HOLIDAYS*/}
                <div className={s.cover}>
                    <div className={s.areaServiceOfGUKVV}>
                        <div className={s.image}>
                            <img src={holiday} alt=''/>
                        </div>
                        <div className={s.text}>
                            <NavLink to='/holidaysBody'>Дни рождения и знаменательные даты</NavLink>
                        </div>
                    </div>
                </div>
                {/*--------------------------------------PHOTO_GALLERY*/}
                <div className={s.cover}>
                    <div className={s.areaServiceOfGUKVV}>
                        <div className={s.image}>
                            <img src={photoGallery} alt=''/>
                        </div>
                        <div className={s.text}>
                            <NavLink to='/photoGallery'>Фотогалерея</NavLink>
                        </div>
                    </div>
                </div>
                {/*--------------------------------------REFERENCES_INFORMATION*/}
                <div className={s.cover}>
                    <div className={s.areaServiceOfGUKVV}>
                        <div className={s.image}>
                            <img src={referenceInformation} alt=''/>
                        </div>
                        <div className={s.text}>
                            <NavLink to='/'>Справочная информация</NavLink>
                        </div>
                    </div>
                </div>
                {/*--------------------------------------TELEPHONE_BOOK*/}
                <div className={s.cover}>
                    <div className={s.areaServiceOfGUKVV}>
                        <div className={s.image}>
                            <img src={telephoneBook} alt=''/>
                        </div>
                        <div className={s.text}>
                            <NavLink to='/'>Телефонные справочники внутренних войск</NavLink>
                        </div>
                    </div>
                </div>
                {/*--------------------------------------FOREIGN_LINKS*/}
                {
                    this.props.services.map(service =>
                        <div className={s.cover}>
                            <div className={s.areaServiceOfGUKVV}>
                                <div className={s.image}>
                                    <img src={service.image} alt=''/>
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
export default ServicesGUKVV;