import React, { useState } from 'react';
import styleNames from './header.module.css';

export const Header = () => {


    const [dataButtons, setDataButtons] = useState<Array<string>>([
        'Направления',
        'Выбор направления',
        'Технологии',
        'Тренажёр',
        'Другое'
    ]);


    return (
        <div className={styleNames.wrapper}>
            <div className={`${styleNames.container} container`}>
                <h1 className={styleNames.title}>C:
                    <span style={{color: 'rgb(0, 250, 200)'}}>\</span>programmingLearn
                    <span style={{color: 'rgb(0, 250, 200)'}}></span></h1>
                <div className={styleNames.buttons}>
                    {dataButtons.map(el => <button className={styleNames.button}>{el}</button>)}
                </div>
            </div>
        </div>
    )
}