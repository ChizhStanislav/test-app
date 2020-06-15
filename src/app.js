import React from 'react';
import Header from "./components/headerBlock/header";
import {BrowserRouter} from "react-router-dom";
import s from './App.module.scss'
import Footer from "./components/footerBlock/footer";
import Body from "./components/bodyBlock/body";


function App(props) {
    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header menu={props.store.getState().links}/>
                <Body data={props.store.getState()}/>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
