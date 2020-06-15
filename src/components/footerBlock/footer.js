import React from "react";
import s from './Footer.module.scss';

const Footer = () => {

    return (
        <div className={s.cover}>
            <p>Copyright© 2008-{new Date().getFullYear()}. ЦИТВВ (017) 229-85-81</p>
        </div>
    );
};

export default Footer;