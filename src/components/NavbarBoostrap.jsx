import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavbarBoostrap() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <img src='../logo.jpg' alt="logo" style={{ width: "6rem" }} />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Bolsos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Zapatillas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Paletas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default NavbarBoostrap;