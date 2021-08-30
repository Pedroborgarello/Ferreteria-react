import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

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
                </Container>
            </Navbar>
        </div>
    );
}