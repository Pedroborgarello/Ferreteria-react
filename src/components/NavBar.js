import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return (
        <div>
            <Navbar className="navBar" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="navTitle" href="#home">Ferretería El Chañar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="linksNav" href="#home">Herramientas</Nav.Link>
                        <Nav.Link className="linksNav" href="#features">Herramientas Eléctricas</Nav.Link>
                        <Nav.Link className="linksNav" href="#pricing">Seguridad</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </div>
    );
}