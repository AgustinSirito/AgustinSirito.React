import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                    <Container>
                    <Navbar.Brand>
                        <a className="navbar-brand" href="#home">
                            <img src={logo} alt="Logo de Mi Sitio" style={{ width: '40px', height: 'auto' }} />Magus
                        </a>
                    </Navbar.Brand>                    
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/plantas">Plantas</Nav.Link>
                        <Nav.Link href="/macetas">Macetas</Nav.Link>
                        <NavDropdown title="Accesorios" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/venenos">Venenos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/fertilizantes">Fertilizantes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/herramientas">Herramientas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget/>
                    </Container>
                    
            </Navbar>
            
        </>
    )
}

export default NavBar