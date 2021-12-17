
import * as React from 'react';
import { Outlet } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import { Toolbar, Button } from '@mui/material/';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import CloseIcon from '@mui/icons-material/Close';
import { Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const drawerWidth = 210;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    backgroundColor: "black",
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DashboardHome = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);

    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar open={open} className="bg-light text-dark">
                <Toolbar className="d-flex align-items-center">
                    <IconButton onClick={handleDrawerClose}
                        sx={{ mr: 2, ...(!open && { display: 'none' }) }}
                        className="fs-2">
                        {theme.direction === 'ltr' ? <CloseIcon className="fs-1" /> : <CloseIcon className="fs-1" />}
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}

                    >
                        <MenuIcon className="fs-1" />
                    </IconButton>
                    <br />
                    <Typography variant="h6" noWrap component="div">
                        Mobile Bazar
                    </Typography>
                    <HashLink to="/home" className="text-decoration-none ms-auto"><Button variant='outlined' className=" px-md-5 py-1 rounded-pill ms-auto me-md-5">Home</Button></HashLink>

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >

                <List className="border-0 text-dark bg-light shadow-sm" style={{ height: '100vh', paddingTop: '65px' }}>
                    <ListItem button>
                        <HashLink to="/dashboard/userProfile" className='text-decoration-none w-100 text-dark fw-bold'>PROFILE</HashLink>
                    </ListItem>

                    <ListItem button>
                        <HashLink to="/dashboard/addProduct" className='text-decoration-none w-100 text-dark fw-bold'>ADD PRODUCT</HashLink>
                    </ListItem>

                    <ListItem button>
                        <HashLink to="/dashboard/myOrders" className='text-decoration-none w-100 text-dark fw-bold'>MY ORDERS</HashLink>
                    </ListItem>

                    <ListItem button>
                        <HashLink to="/dashboard/manageProduct" className='text-decoration-none w-100 text-dark fw-bold'>MANAGE PRODUCT</HashLink>
                    </ListItem>

                    <ListItem button>

                        <HashLink to="/dashboard/manageOrders" className='text-decoration-none w-100 text-dark fw-bold'>MANAGE ORDERS</HashLink>
                    </ListItem>

                    {/*                     
                    <ListItem button>
                        <HashLink to="/dashboard/manageProduct" className='text-decoration-none w-100 text-dark fw-bold'>MAKE ADMIN</HashLink>
                    </ListItem> */}

                    <ListItem button>
                        <HashLink to="/dashboard/addReview" className='text-decoration-none w-100 text-dark fw-bold'>RATE US</HashLink>
                    </ListItem>

                    <Navbar
                        collapseOnSelect
                        expand="lg"
                        variant="light"
                        fixed="bottom"
                    >
                        <Nav.Link className='up-arrow fs-5  rounded-pill text-decoration-none ms-3 mb-4' as={HashLink} to="/home">BACK TO HOME</Nav.Link>
                    </Navbar>
                </List>

            </Drawer>
            <Main open={open} className="border-0" style={{ paddingTop: '20px' }}>
                <div className="home-background">
                    <Outlet />
                </div>

            </Main>
        </Box>
    );
};

export default DashboardHome;