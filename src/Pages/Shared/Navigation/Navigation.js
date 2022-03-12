import * as React from 'react';
import './Navigation.css'
import { Container, Nav, Navbar, Overlay, Popover } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../../hooks/useFirebase';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '../useMediaQuery/useMediaQuery';
import { Button } from '@mui/material';



const Navigation = () => {
    const { user, logOut } = useFirebase();

    const [isSticky, setSticky] = React.useState(false);
    const [isCollapsed, setCollapsed] = React.useState(null);

    const isMobile = useMediaQuery('(max-width: 985px)');


    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    const navigate = useNavigate()
    // logout 
    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't to Logout!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                navigate('/')
                Swal.fire(
                    'Login out',
                    'Logout successfully.',
                    'success'
                )
            }
        })
    }


    // pop over 
    const [show, setShow] = React.useState(false);
    const [target, setTarget] = React.useState(null);
    const ref = React.useRef(null)

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

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
                        <strong>Mobile Bazar</strong>
                    </Navbar.Brand>

                    <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                        <Nav className="ml-auto">
                            <Nav.Link as={HashLink} to="/home#home" className="mr-md-5" onClick={() => window.scrollTo(500, 0)} active>Home</Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home#parts"
                                className="me-md-2" active>
                                Parts
                            </Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home#raise"
                                className="me-md-2" active>
                                Raise
                            </Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home#products"
                                className="me-md-2" active>
                                Products
                            </Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home#details"
                                className="me-md-2" active>
                                Info
                            </Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home#testimonial"
                                className="me-md-2" active>
                                Reviews
                            </Nav.Link>
                            <Nav.Link as={HashLink}
                                to="/home#contact"
                                className="me-md-2" active>
                                Contact Us
                            </Nav.Link>
                            <Nav.Link
                                as={HashLink}
                                to="/dashboard/"
                                className="me-md-2" active>
                                Dashboard
                            </Nav.Link>
                        </Nav>
                        <Nav className='ms-auto '>
                            {user.email ? <div ref={ref}>
                                <h1 onClick={handleClick} style={{ cursor: 'pointer' }}><i className="fas fa-user-circle"></i></h1>
                                <Overlay show={show} target={target} placement="bottom" container={ref} containerPadding={20}>
                                    <Popover id="popover-contained" className='border-0 bg-light shadow'>
                                        <Popover.Header className='border-0' > <h5 className='text-center'>{user.displayName}</h5></Popover.Header>
                                        <Popover.Body>
                                            <h6>{user.email}</h6>
                                            <Button variant='outlined' color='secondary' onClick={handleLogout} className='w-100 py-0 text-center mx-auto'>Logout</Button>
                                        </Popover.Body>
                                    </Popover>
                                </Overlay>
                            </div>
                                :
                                isMobile ? <Nav.Link as={HashLink}
                                    to="/login"
                                    className='mb-2'>
                                    <Button className='py-1 px-5' variant='contained' color='secondary'>Login</Button>
                                </Nav.Link> :
                                    <Nav.Link as={HashLink} to="/login" className='login-button text-center mx-auto mb-3'>Login </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {isSticky && <Navbar
                fixed="bottom"
            >
                <Nav.Link className='up-arrow fs-5  rounded-pill text-decoration-none ms-auto me-4 mb-5' as={HashLink} to="/home#home"><i className="fas fa-arrow-up"></i></Nav.Link>
            </Navbar>}
        </>
    );
};

export default Navigation;