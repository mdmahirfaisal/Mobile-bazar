import * as React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css';
import useMediaQuery from "../../Shared/useMediaQuery/useMediaQuery";

const Login = () => {
    const isDesktop = useMediaQuery('(min-width: 900px)');



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
                            <label>
                                <span>Email</span>
                                <input type="email" />
                            </label>
                            <label>
                                <span>Password</span>
                                <input type="password" />
                            </label>
                            <p className="forgot-pass">Forgot password?</p>
                            <button type="button" className="submit">Sign In</button>
                            <button type="button" className="fb-btn mt-2"> <span className='text-dark'>Connect with</span> <span>Google</span></button>
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
                                <label>
                                    <span>Name</span>
                                    <input type="text" />
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input type="email" />
                                </label>
                                <label>
                                    <span>Password</span>
                                    <input type="password" />
                                </label>
                                <button type="button" className="submit mt-2">Sign Up</button>
                                <button type="button" className="fb-btn mt-2"><span className='text-dark'>Join with</span> <span>Google</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            }


            {/* second login form  */}

            {!isDesktop && <div className="second-form-body">
                <div className="second-form">
                    <div className="main">
                        <input type="checkbox" id="chk" aria-hidden="true" />
                        <div className="signup">
                            <form>
                                <label for="chk" aria-hidden="true">Sign up</label>
                                <input type="text" name="txt" placeholder="User name" required="" />
                                <input type="email" name="email" placeholder="Email" required="" />
                                <input type="password" name="pswd" placeholder="Password" required="" />
                                <button>Sign up</button>
                            </form>
                        </div>

                        <div className="login">
                            <form>
                                <label for="chk" aria-hidden="true">Login</label>
                                <input type="email" name="email" placeholder="Email" required="" />
                                <input type="password" name="pswd" placeholder="Password" required="" />
                                <button>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default Login;