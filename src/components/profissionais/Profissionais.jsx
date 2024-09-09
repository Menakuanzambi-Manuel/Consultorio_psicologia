import { React, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './profissionais.css'
import  Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import { doctor1, doctor2, doctor3, doctor4, doctor5, doctor6, doctor7, doctor8, doctor9 } from './imports';
import img from '../../assets/images/pi4.jpg'

function Profissionais() {
    return (
        <>
            <section id="profissionais" className="profissionais-block py-5">
                <Container fluid>
                    <h1>Nossos profissionais</h1>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Card style={{ width: '300px', height: '400px' }}><img src={img} alt="" /></Card>
                        </SwiperSlide>
                        <SwiperSlide><Card style={{ width: '300px', height: '400px' }}><img src={doctor1} alt="" /></Card></SwiperSlide>
                        <SwiperSlide><Card style={{ width: '300px', height: '400px' }}><img src={doctor1} alt="" /></Card></SwiperSlide>
                        <SwiperSlide><Card style={{ width: '300px', height: '400px' }}><img src={doctor1} alt="" /></Card></SwiperSlide>
                        <SwiperSlide><Card style={{ width: '300px', height: '400px' }}><img src={doctor1} alt="" /></Card></SwiperSlide>
                        <SwiperSlide><Card style={{ width: '300px', height: '400px' }}><img src={doctor1} alt="" /></Card></SwiperSlide>
                        <SwiperSlide><Card style={{ width: '300px', height: '400px' }}><img src={doctor1} alt="" /></Card></SwiperSlide>
                        <SwiperSlide><Card style={{ width: '300px', height: '400px' }}><img src={doctor1} alt="" /></Card></SwiperSlide>
                        <SwiperSlide><Card style={{ width: '300px', height: '400px' }}><img src={doctor1} alt="" /></Card></SwiperSlide>
                    </Swiper>
                </Container>
            </section>
        </>
    )
}

export default Profissionais
