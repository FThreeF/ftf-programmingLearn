import React from 'react';
import styleNames from './blockDirection.module.css';

type typeBlockDirection = {
    title: string
    text: string
    image: string
}

export const BlockDirection = ({title, text, image}: typeBlockDirection) => {
    return (
        <div className={styleNames.wrapper}>
            <div className={styleNames.container}>
                <h3 className={`${styleNames.title} title`}>{title}</h3>
                <p className={`${styleNames.text} text`}>{text}</p>
                <img className={styleNames.image} src={image} alt="" />
            </div>
        </div>
    )
}