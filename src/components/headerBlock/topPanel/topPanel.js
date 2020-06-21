import React from "react";
import s from './TopPanel.module.scss';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

class TopPanel extends React.Component {

    componentDidMount() {
        axios.get("")
            .then(response =>{
                this.props.setTopPanel();
            });
    }

    render() {
        return (
            <div className={s.cover}>
{/*--------------------------------------MAIN BOTTOM */}
                <div className={s.dropdown}>
                    <div className={s.dropRef}>
                        <NavLink to='/main'>Главная</NavLink>
                    </div>
                </div>
{/*--------------------------------------SERVICE GUKVV BOTTOM */}
                <div className={s.dropdown}>
                    <div className={s.dropRef}>
                        <NavLink to='/servicesGUKVV'>Ресурсы ГУКВВ</NavLink>
                    </div>
                    <div className={s.dropdownContent}>
                        <NavLink to='/holidaysBody'>Дни рождения и знаменательные даты</NavLink>
                        <NavLink to='/photoGallery'>Фотогалерея</NavLink>
                        <NavLink to='/'>Справочная информация</NavLink>
                        <NavLink to='/'>Телефонные справочники внутренних войск</NavLink>
                        {
                            this.props.servicesGUKVV.map(service => <NavLink to={service.link}>{service.text}</NavLink>)
                        }
                    </div>
{/*--------------------------------------SERVICE MVDRB BOTTOM */}
                </div>
                <div className={s.dropdown}>
                    <div className={s.dropRef}>
                        <NavLink to='/servicesMVDRB'>Ресурсы МВД</NavLink>
                    </div>
                    <div className={s.dropdownContent}>
                        {
                            this.props.servicesMVDRB.map(service => <NavLink to={service.link}>{service.text}</NavLink>)
                        }
                    </div>
                </div>
{/*--------------------------------------SETTINGS BOTTOM */}
                <div className={s.dropdown}>
                    <div className={s.dropRef}>
                        <NavLink to='/'>Настройки</NavLink>
                    </div>
                </div>
            </div>
        );
    }
};

export default TopPanel;