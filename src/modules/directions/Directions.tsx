import { BlockDirection } from 'elements/blocks/blockDirection/BlockDirection';
import React from 'react';
import styleNames from './directions.module.css';
import Frontend from './Frontend.png';
import Backend from './Backend.png';
import UIUX from './UIUX.png';

export const Directions = () => {

    const dataBlockDirection = [
        {
            title: 'UI/UX',
            text: `Специалист, который проектирует пользовательские интерфейсы.`,
            image: UIUX,
        },
        {
            title: 'Front-end',
            text: 'Разработка интерфейса и функций, которые работают на клиентской стороне веб-сайта',
            image: Frontend,
        },
        {
            title: 'Back-end',
            text: `Разработка взаимодействия с внутренними данными, которые потом отображает фронтенд.`,
            image: Backend,
        },
    ];

    return (
        <div className={styleNames.wrapper}>
            <div className={`${styleNames.container} container`}>
                <div className={styleNames.block}>
                    {dataBlockDirection.map(el =>
                        <BlockDirection {...el} />
                    )}
                </div>
            </div>
        </div>
    )
}
