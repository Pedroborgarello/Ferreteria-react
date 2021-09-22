import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>
            <Navbar className="navBar" bg="dark" variant="dark">
                <Container>
                    <Link to='/'>
                        <Navbar.Brand className="navTitle">Ferretería El Chañar</Navbar.Brand>
                    </Link>
                    <Nav className="me-auto">
                        <Link to='/categoria/manuales'>
                            <Nav className="linksNav">Herramientas</Nav>
                        </Link>
                        <Link to='/categoria/electricas'>
                            <Nav className="linksNav">Herramientas Eléctricas</Nav>
                        </Link>
                        <Link to='/categoria/seguridad'>
                            <Nav className="linksNav" >Seguridad</Nav>
                        </Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </div>
    );
}