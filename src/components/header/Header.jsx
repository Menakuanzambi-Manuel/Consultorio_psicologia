import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { FaBlog, FaHouse } from 'react-icons/fa6'
import { BsTelephone, BsSearch } from 'react-icons/bs'
import { FaServicestack } from 'react-icons/fa'


const Header = () => {
    return (
        <>


            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        Metanoia &nbsp;
                        <InputGroup className="">
                            <InputGroup.Text id="basic-addon1" className='pesquisar1'><BsSearch className="fs-6" /></InputGroup.Text>
                            <Form.Control
                                placeholder="pesquisar"
                                aria-label="pesquisar"
                                aria-describedby="basic-addon1" className='pesquisar2'
                            />
                        </InputGroup>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"><FaHouse size={18} />&nbsp; Página inical</Nav.Link>
                            <Nav.Link href="/services"><FaServicestack size={18} />&nbsp; Serviços</Nav.Link>
                            <Nav.Link href="/Blog"><FaBlog size={18} />&nbsp; Blog</Nav.Link>
                            <Nav.Link href="/contact"><BsTelephone size={18} />&nbsp; Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header