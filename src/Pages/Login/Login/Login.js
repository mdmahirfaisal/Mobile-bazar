import React from 'react'
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css';
import useMediaQuery from "../../Shared/useMediaQuery/useMediaQuery";
import { TextField } from '@mui/material';

import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import useFirebase from '../../../hooks/useFirebase';
import GoogleIcon from '@mui/icons-material/Google';


const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { signInWithGoogle, registerUser, loginUser, } = useFirebase();

    const location = useLocation();
    const navigate = useNavigate();

    const isDesktop = useMediaQuery('(min-width: 900px)');

    //// Login with google 
    const handleGoogleLogin = () => {
        signInWithGoogle(location, navigate);
    };

    //// handle register
    const handleRegisterSubmit = (data) => {

        registerUser(data.email, data.password, data.name, navigate, reset)
        console.log(data)
    }

    //// handle login
    const handleLoginSubmit = (data) => {
        loginUser(data.email, data.password, location, navigate, reset)
    };

    // const admin = 'admin@gmail.com';
    // const password = 123456;

    const imageButton = () => {
        document.querySelector('.cont').classList.toggle('s--signup');
    }
    return (
        <>
            <Navigation></Navigation>
            {isDesktop &&

                <div className="first-form">
                    <p className="tip mt-5 pt-5">Please click on button in image container</p>
                    <div className="cont bg-light shadow " style={{ borderRadius: '20px' }}>
                        <div className="form sign-in">
                            <h2>Welcome back,</h2>
                            <form onSubmit={handleSubmit(handleLoginSubmit)} className='mb-3'>
                                <TextField sx={{ width: '50%', m: 1 }}
                                    //  defaultValue={user.email ? "" : admin}
                                    name="email" type="email" {...register("email")} label="Your Email" variant="standard" required />

                                <TextField sx={{ width: '50%', m: 1 }} className="mb-3"
                                    //  defaultValue={user.email ? "" : password}
                                    name="password" {...register("password")} label="Your Password"
                                    type="password"
                                    variant="standard" required />

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
                                <form onSubmit={handleSubmit(handleRegisterSubmit)} className='mb-3'>
                                    <TextField sx={{ width: '50%', m: 1 }}
                                        name="name" type="text" {...register("name")} label="Your Name" variant="standard" required />

                                    <TextField sx={{ width: '50%', m: 1 }}
                                        name="email" type="email" {...register("email")} label="Your Email" variant="standard" required />

                                    <TextField sx={{ width: '50%', m: 1 }}
                                        name="password" type="password" className="mb-3" {...register("password")} label="Your Password" variant="standard" required />

                                    <Button type="submit" sx={{ width: '50%', m: 1, mt: 2 }} variant="contained">Sign up</Button>
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
                            <form onSubmit={handleSubmit(handleRegisterSubmit)}>
                                <label for="chk" aria-hidden="true">Sign up</label>
                                <input type="text" {...register("name")} placeholder="User name" required />
                                <input type="email" {...register("email")} placeholder="Email" required />
                                <input type="password" {...register("password")} placeholder="Password" required />
                                <button type='submit'>Sign up</button>
                            </form>
                            <Button onClick={handleGoogleLogin} sx={{ width: '75%', m: 1, mt: 2 }} className="fb-btn " variant="outlined"> <span className='text-dark '>Connect with</span> <span><GoogleIcon /></span></Button>
                        </div>

                        <div className="login">
                            <form onSubmit={handleSubmit(handleLoginSubmit)}>
                                <label for="chk" aria-hidden="true">Login</label>
                                <input type="email"   {...register("email")} placeholder="Email" required />
                                <input type="password"  {...register("password")} placeholder="Password" required />
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