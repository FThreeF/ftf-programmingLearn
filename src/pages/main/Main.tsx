import { Header } from 'modules/header/Header';
import { MainSwipe } from 'modules/mainSwipe/MainSwipe';
import React from 'react';
import styleNames from './main.module.css';

export const Main = () => {
    return (
        <div className={styleNames.wrapper}>
            <Header/>
            <MainSwipe/>
        </div>
    )
}