import React, { useState } from 'react'
import './hero.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import { Row, Col } from 'react-bootstrap'
import { BsTelephone } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import banner1 from '../../assets/images/medico.png'
import banner2 from '../../assets/images/medico2.png'
import banner3 from '../../assets/images/medico3.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const Hero = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onAutoplayTimeLeft = {};

    return (
        <>
            <Modal className='py-5' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Marcar consulta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Row>
                                <Col sm={6}>
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="nome proprio"
                                        autoFocus
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Form.Label>Sobrenome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="sobrenome"
                                    />
                                </Col>
                                <Col><br />
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="exemplo@gmail.com"
                                    />
                                </Col>
                                <Row>
                                    <Col sm={6}><br />
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control
                                            type="date"
                                            placeholder="exemplo@gmail.com"
                                        />
                                    </Col>
                                    <Col sm={6}><br />
                                        <Form.Label>Hora</Form.Label>
                                        <Form.Control
                                            type="time"
                                            placeholder="exemplo@gmail.com"
                                        />
                                    </Col>
                                </Row>
                            </Row>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Assunto</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
            <section id="home" className="hero-block py-5">
                <Container>
                    <Row>
                        <Col sm={6}>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                onAutoplayTimeLeft={onAutoplayTimeLeft}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src={banner1} /></SwiperSlide>
                                <SwiperSlide><img src={banner2} /></SwiperSlide>
                                <SwiperSlide><img src={banner3} /></SwiperSlide>
                            </Swiper>
                        </Col>
                        <Col sm={6}>
                            <h1>Consultório de <br /> Psicologia</h1>
                            <p>To be more specific, the problem of a small part of the matrix of
                                available is regularly debated in the light of The Usage of
                                Transparent Extent <br /> (Buck Begay in The Book of the Structural Comparison.
                            </p>
                            <Row>
                                <Col sm={4}>
                                    <NavLink to="" className='button btn1' onClick={handleShow}><FaCalendarAlt size={15} /> &nbsp; Marcar consulta</NavLink>
                                </Col>
                                <Col sm={4}>
                                    <NavLink to="" className='button btn2'><BsTelephone size={15} /> &nbsp; Ligar agora</NavLink>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Hero
