import React from 'react';
import './Testimonials.css';
import Fade from 'react-reveal/Fade';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    Autoplay,
    Navigation,
    EffectCoverflow,
    Pagination,
} from "swiper/core";
import TestimonialInfo from '../TestimonialInfo/TestimonialInfo';


const customerReview = [
    {
        name: 'faisal',
        id: 1,
        ratings: '',
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/3d681NY/austin-distel-7b-Mdi-Iqz-J4-unsplash.png',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 2,
        ratings: '',
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/3d681NY/austin-distel-7b-Mdi-Iqz-J4-unsplash.png',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 3,
        ratings: '',
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/3d681NY/austin-distel-7b-Mdi-Iqz-J4-unsplash.png',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 4,
        ratings: '',
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/3d681NY/austin-distel-7b-Mdi-Iqz-J4-unsplash.png',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 5,
        ratings: '',
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/3d681NY/austin-distel-7b-Mdi-Iqz-J4-unsplash.png',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 6,
        ratings: '',
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/3d681NY/austin-distel-7b-Mdi-Iqz-J4-unsplash.png',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
];

const Testimonials = () => {
    SwiperCore.use([EffectCoverflow, Autoplay, Navigation, Pagination]);
    return (
        <div id="testimonial" className="py-5 bg-light reviews-section">
            <div style={{ width: '98%', margin: '0 auto' }}>
                <Fade bottom duration={3000} distance="50px">
                    <h2 className="pb-5 fw-bold">CUSTOMER REVIEWS</h2>
                </Fade>
                <Fade bottom duration={3000} distance="50px">
                    <Swiper
                        loop={true}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        coverflowEffect={{
                            rotate: 60,
                            stretch: 5,
                            depth: 100,
                            modifier: 2,
                            // slideShadows: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                    >

                        {customerReview.map((review) => {
                            return (
                                <SwiperSlide className="swiper-slide"
                                    key={review.id}>
                                    <TestimonialInfo review={review}></TestimonialInfo>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Fade>

            </div>

        </div>
    );
};

export default Testimonials;