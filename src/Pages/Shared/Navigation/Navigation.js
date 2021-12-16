import * as React from 'react';
import './Navigation.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';



const Navigation = () => {

    const [isSticky, setSticky] = React.useState(false);
    const [isCollapsed, setCollapsed] = React.useState(null);


    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="light"
                fixed="top"
                className={(isSticky || isCollapsed) ? "shadow-sm nav-bg-color py-2" : "py-4"}>
                <Container>

                    <Navbar.Brand
                        as={HashLink} to="/"
                        className="ml-md-5"
                        style={{ color: "#3a4256", fontSize: "1.55rem" }}>
                        {/* <img
                        alt="Logo"
                        src=""
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '} */}
                        <strong>Mobile Bazar</strong>
                    </Navbar.Brand>

                    <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                        <Nav className="ml-auto">
                            <Nav.Link as={HashLink} to="/" className="mr-md-5" onClick={() => window.scrollTo(500, 0)} active>Home</Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home#"
                                className="mr-md-5" active>
                                Services
                            </Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home#"
                                className="mr-md-5" active>
                                Reviews
                            </Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home#"
                                className="mr-md-5" active>
                                Contact Us
                            </Nav.Link>
                            <Nav.Link
                                as={HashLink}
                                to="/dashboard/"
                                className="mr-md-5" active>
                                Dashboard
                            </Nav.Link>
                        </Nav>
                        <Nav className='ms-auto '>
                            <Nav.Link as={HashLink}
                                to="/login"
                                className='login-button text-center mx-auto mb-3'>
                                Login
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {isSticky && <Navbar
                collapseOnSelect
                expand="lg"
                variant="light"
                fixed="bottom"
            >
                <Nav.Link className='up-arrow fs-5  rounded-pill text-decoration-none ms-auto me-4 mb-5' as={HashLink} to="/home#home"><i className="fas fa-arrow-up"></i></Nav.Link>
            </Navbar>}
        </>
    );
};

export default Navigation;