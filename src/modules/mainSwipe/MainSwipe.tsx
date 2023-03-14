import React from 'react';
import 'swiper/css/bundle';
import styleNames from './mainSwipe.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Directions } from 'modules/directions/Directions';


import { Mousewheel } from "swiper";


export const MainSwipe = () => {

    return (
        <div className={styleNames.wrapper}>
            <Swiper
                className={styleNames.swipe}
                direction={"vertical"}


                slidesPerView={"auto"}
                mousewheel={true}
                modules={[Mousewheel]}


            >
                <SwiperSlide className={styleNames.slide}>
                    <Directions />
                </SwiperSlide>
                <SwiperSlide className={styleNames.slide}>
                    Choice
                </SwiperSlide>
                <SwiperSlide className={styleNames.slide}>
                    Technologies
                </SwiperSlide>
            </Swiper>
        </div>
    )
}