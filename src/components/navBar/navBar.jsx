import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                    <Container>
                    <Navbar.Brand as={Link} to="/">
                        <div className="navbar-brand">
                            <img src={logo} alt="Logo de Mi Sitio" style={{ width: '40px', height: 'auto' }} />Magus
                        </div>
                    </Navbar.Brand>                    
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/category/plantas">Plantas</Nav.Link>
                        <Nav.Link as={Link} to="/category/macetas">Macetas</Nav.Link>
                        <NavDropdown title="Accesorios" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="category/venenos">Venenos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/category/fertilizantes">Fertilizantes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/category/herramientas">Herramientas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget/>
                    </Container>
            </Navbar>
        </>
    )
}

export default NavBar