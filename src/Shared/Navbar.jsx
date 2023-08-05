import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Logo/Logo.png'
import { Link } from 'react-router-dom';

const Navbarr = () => {
    const navOption = <>
       <Link to="/" className='text-decoration-none'><span className='me-4 fs-5 fw-bold'>Home</span></Link>
       <Link to="/" className='text-decoration-none'><span className='me-4 fs-5 fw-bold'>About</span></Link>
       <Link to="/" className='text-decoration-none'><span className='me-4 fs-5 fw-bold'>Login</span></Link>
       <Link to="/" className='text-decoration-none'><span className='fs-5 fw-bold'>Sign Up</span></Link>
    </>
    return (
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container md>
                    <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {navOption}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Navbarr;