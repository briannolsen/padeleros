import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';


function NavbarBoostrap() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to={'/'}>
                <img src='../logo.jpg' alt="logo" style={{ width: "6rem" }} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link as={NavLink} to={'/'}>Inicio</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to='/category/bolsos' href="#action/3.1">Bolsos</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/category/mochila' href="#action/3.2">Mochila</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/category/paletas' href="#action/3.3">Paletas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default NavbarBoostrap;