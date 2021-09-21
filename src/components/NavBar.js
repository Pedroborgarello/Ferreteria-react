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
                    <Link to='/' exact>
                        <Navbar.Brand className="navTitle">Ferretería El Chañar</Navbar.Brand>
                    </Link>
                    <Nav className="me-auto">
                        <Link to='/categoria/manuales' exact>
                            <Nav.Link className="linksNav" href="#home">Herramientas</Nav.Link>
                        </Link>
                        <Link to='/categoria/electricas' exact>
                            <Nav.Link className="linksNav" href="#features">Herramientas Eléctricas</Nav.Link>
                        </Link>
                        <Nav.Link className="linksNav" href="#pricing">Seguridad</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </div>
    );
}