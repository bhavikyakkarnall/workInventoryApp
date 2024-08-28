import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navigation() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">ADT Care</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/mastelist">Masterlist</Nav.Link>
                    <Nav.Link as={Link} to="/DispatchForm">DispatchForm</Nav.Link>
                    <Nav.Link as={Link} to="/StockOrder">Order</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}