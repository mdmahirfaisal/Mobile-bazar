import * as React from 'react';
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
        <div>
            <Navbar collapseOnSelect
                expand="lg"
                variant="light"
                fixed="top"
                className={(isSticky || isCollapsed) ? "shadow-sm bg-white py-2" : "py-4"}>
                <Container>
                    <HashLink className="text-decoration-none" to="/">
                        <div className="d-md-flex align-items-center">
                            {/* <img style={{ height: '35px' }} className="img-fluid" src="" alt="Logo" /> */}
                            <h5 className="text-danger fw-bold mx-2" style={{ marginBottom: '-5px' }}>MOBILE BAZAR</h5>
                        </div>
                    </HashLink>
                    <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                        <Nav className="me-auto" style={{ marginBottom: '-5px' }}>
                            <Nav.Link as={HashLink} to="/home#home" className="mr-md-5 btn" onClick={() => window.scrollTo(500, 0)} active>Home</Nav.Link>
                            <Nav.Link className="btn text-dark" as={HashLink} to="/home#home">About</Nav.Link>
                            <Nav.Link className="btn text-dark" as={HashLink} to="/home#home">Products</Nav.Link>
                            <Nav.Link className="btn text-dark" as={HashLink} to="/home#home">Review</Nav.Link>
                            <Nav.Link className="btn text-dark" as={HashLink} to="/home#home">Contact</Nav.Link>

                        </Nav>

                        <Nav className="d-md-flex align-items-center" style={{ marginBottom: '-5px' }}>
                            <Nav.Link className="btn text-dark" as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link className="btn text-dark" as={HashLink} to="/login">Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;