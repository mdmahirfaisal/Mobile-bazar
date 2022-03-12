import React from 'react';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span><a className='contact-text' href="https://www.google.com/maps/search/Developers+Area/@24.4282908,88.6065141,21z/data=!4m7!2m6!3m5!1sDevelopers+Area!2s24.428376,+88.606569!4m2!1d88.6065689!2d24.428376" target="_blank" rel='noreferrer'>Rajshahi, Bangladesh</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span><a className='contact-text' href="tel:+8801928646555">01928646555</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span><a className='contact-text' href="https://mail.google.com/mail/?view=cm&fs=1&to=rjmahir.faisal@gmail.com" target="_blank" rel='noreferrer'>rjmahir.faisal@gmail.com</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <HashLink to="/home#home"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" /></HashLink>
                                    </div>
                                    <div className="footer-text">
                                        <p>In the PRINCE2 project management method, a product description (PDD) is a structured format that presents information about a project product.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href={`https://www.facebook.com/profile.php?id=100069936932811`} target="_blank" rel="noopener noreferrer" className="foot-link" ><i className="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href={`https://github.com/mdmahirfaisal`} target="_blank" rel="noopener noreferrer" className="foot-link"><i className="fab fa-github twitter-bg"></i></a>
                                        <a href={`https://drive.google.com/file/d/1IWDXgsTltXLd81c202tLphDiYI-JgIIW/view?usp=sharing`} target="_blank" rel="noopener noreferrer" className="foot-link"><i className="fab fa-google-plus-g google-bg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul className='ul-link'>
                                        <li><HashLink to="/home#home">Home</HashLink></li>
                                        <li><HashLink to="/products">Our Services</HashLink></li>
                                        <li><HashLink to="/home#contact">Contact us</HashLink></li>
                                        <li><a href={`https://mahirfaisalportfolio.web.app`} target="_blank" rel="noopener noreferrer" className="foot-link">portfolio</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i className="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2018, All Right Reserved <HashLink to="/home#home">Mobile Bazar</HashLink></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul className='ul-link'>
                                        <li><HashLink to="/home#home">Home</HashLink></li>
                                        <li><HashLink to="/home#contact">Contact</HashLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;