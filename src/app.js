import React from 'react';
import Header from "./components/headerBlock/header";
import s from './App.module.scss'
import Footer from "./components/footerBlock/footer";
import Body from "./components/bodyBlock/body";


function App() {
    return (
            <div className={s.app}>
                <Header />
                <Body />
                <Footer />
            </div>
    );
}

export default App;
