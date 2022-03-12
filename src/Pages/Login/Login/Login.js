import React, { useState } from 'react'
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css';
import useMediaQuery from "../../Shared/useMediaQuery/useMediaQuery";
import { TextField } from '@mui/material';
import { Toast } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const { user, signInWithGoogle, registerUser, loginUser, } = useAuth();
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPass, setNewPass] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const isDesktop = useMediaQuery('(min-width: 900px)');

    //// Login with google 
    const handleGoogleLogin = () => {
        signInWithGoogle(location, navigate);
    };

    //// handle register
    const handleRegisterSubmit = () => {
        registerUser(newEmail, newPass, newName, navigate)
    }

    //// handle login
    const handleLoginSubmit = (data) => {
        console.log(data)
        loginUser(data.email, data.password, location, navigate)
    };

    const imageButton = () => {
        document.querySelector('.cont').classList.toggle('s--signup');
    }
    const [show, setShow] = useState(true);

    const toastContent = (
        <div className="container d-flex justify-content-center" style={{ position: 'relative' }}>
            {!user.email && <Toast style={{ position: 'absolute', backgroundColor: 'white' }} onClose={() => setShow(false)} show={show} delay={15000} autohide>
                <Toast.Header><strong className="me-auto">Important Info</strong></Toast.Header>
                <Toast.Body className="text-center">
                    <h6 className='text-start'>Use this account to  Sign in as an admin<br /> to test the admin panel <br /> Or login with a different account as a user.</h6>
                </Toast.Body>
            </Toast>}
        </div>
    )


    const admin = "admin@gmail.com";
    const password = "123456";

    return (
        <>
            <Navigation></Navigation>
            {toastContent}
            {isDesktop &&
                <div className="first-form ">
                    <h5 className='text-secondary mt-4 py-5 fw-bold'>Please Login or Registration</h5>
                    <div className="cont shadow" style={{ borderRadius: '20px' }}>
                        <div className="form sign-in">
                            <h2>Welcome back,</h2>
                            <form onSubmit={handleSubmit(handleLoginSubmit)} className='mb-3'>
                                <TextField sx={{ width: '50%', m: 1, textAlign: 'center' }}
                                    defaultValue={admin}
                                    type="email" {...register("email")} label="Your Email" variant="standard" />

                                <TextField sx={{ width: '50%', m: 1, textAlign: 'center' }} className="mb-3"
                                    defaultValue={password}
                                    {...register("password")} label="Your Password"
                                    type="password"
                                    variant="standard" />

                                <Button type="submit" sx={{ width: '50%', m: 1, mt: 2 }} variant="contained">Login</Button>
                            </form>
                            <Button onClick={handleGoogleLogin} sx={{ width: '75%', m: 1, mt: 2 }} className="fb-btn " variant="outlined"> <span className='text-dark '>Connect with</span> <span><GoogleIcon /></span></Button>
                        </div>
                        <div className="sub-cont">
                            <div className="img">
                                <div className="img__text m--up">
                                    <h2>New here?</h2>
                                    <p>Sign up and discover great amount of new opportunities!</p>
                                </div>
                                <div className="img__text m--in">
                                    <h2>One of us?</h2>
                                    <p>If you already has an account, just sign in. We've missed you!</p>
                                </div>
                                <div onClick={imageButton} className='img__btn'>
                                    <span className="m--up">Sign Up</span>
                                    <span className="m--in">Sign In</span>
                                </div>
                            </div>
                            <div className="form sign-up">
                                <h2>Time to feel like home,</h2>
                                <form className='mb-3'>
                                    <TextField sx={{ width: '50%', m: 1 }}
                                        name="name" type="text" onChange={(e) => setNewName(e.target.value)} label="Your Name" variant="standard" required />

                                    <TextField sx={{ width: '50%', m: 1 }}
                                        name="email" type="email" onChange={(e) => setNewEmail(e.target.value)} label="Your Email" variant="standard" required />

                                    <TextField sx={{ width: '50%', m: 1 }}
                                        name="password" type="password" className="mb-3" onChange={(e) => setNewPass(e.target.value)} label="Your Password" variant="standard" required />

                                    <Button onClick={handleRegisterSubmit} sx={{ width: '50%', m: 1, mt: 2 }} variant="contained">Sign up</Button>
                                </form>
                                <Button onClick={handleGoogleLogin} sx={{ width: '75%', m: 1, mt: 2 }} className="fb-btn " variant="outlined"> <span className='text-dark '>Connect with</span> <span><GoogleIcon /></span></Button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* second login form  */}

            {!isDesktop && <div className="second-form-body">
                <div className="second-form py-5">
                    <div className="main ">
                        <input type="checkbox" id="chk" aria-hidden="true" />
                        <div className="signup">
                            <form onSubmit={handleRegisterSubmit}>
                                <label htmlFor="chk" aria-hidden="true">Sign up</label>
                                <input type="text" name="name" onChange={(e) => setNewName(e.target.value)} placeholder="User name" required />
                                <input type="email" name="email" onChange={(e) => setNewEmail(e.target.value)} placeholder="Email" required />
                                <input type="password" name="password" onChange={(e) => setNewPass(e.target.value)} placeholder="Password" required />
                                <button type='submit'>Sign up</button>
                            </form>
                            <Button onClick={handleGoogleLogin} sx={{ width: '75%', m: 1, mt: 2 }} className="fb-btn " variant="outlined"> <span className='text-dark '>Connect with</span> <span><GoogleIcon /></span></Button>
                        </div>

                        <div className="login">
                            <form onSubmit={handleSubmit(handleLoginSubmit)}>
                                <label htmlFor="chk" aria-hidden="true">Login</label>
                                <input type="email" defaultValue="admin@gmail.com"   {...register("email")} placeholder="Email" required />
                                <input type="password" defaultValue="123456"  {...register("password")} placeholder="Password" required />
                                <button type='submit'>Login</button>
                            </form>
                            <Button onClick={handleGoogleLogin} sx={{ width: '75%', m: 1, mt: 2 }} className="fb-btn " variant="outlined"> <span className='text-dark '>Connect with</span> <span><GoogleIcon /></span></Button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default Login;