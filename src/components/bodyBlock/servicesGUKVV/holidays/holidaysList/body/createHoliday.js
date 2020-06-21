import React from "react";
import s from './CreateHoliday.module.scss';

const CreateHoliday = (props) => {

    let dateLink = React.createRef();
    let fullNameLink = React.createRef();
    let positionLink = React.createRef();

    let save = () => {
        alert(dateLink.current.value + ' ' + fullNameLink.current.value + ' ' + positionLink.current.value)
    };

    let onChangeDate = () => {
        alert(dateLink.current.value)
    };

    let onChangeFullName = () => {

    };

    let onChangePosition = () => {

    };


    return (
        <div className={s.cover}>
            <div>
                <input ref={dateLink} onChange={onChangeDate}/>
            </div>
            <div>
                <input ref={fullNameLink} onChange={onChangeFullName}/>
            </div>
            <div>
                <input ref={positionLink} onChange={onChangePosition}/>
            </div>
            <button onClick={save}>Сохранить</button>
        </div>
    );
};

export default CreateHoliday;