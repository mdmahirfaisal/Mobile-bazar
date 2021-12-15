import React from 'react';
import './Banner.css';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';


const Banner = () => {
    return (
        <section id="banner" className="banner-section" style={{}}>
            <Fade bottom duration={2000} distance="100px">
                <h1 className="fw-bold text-light pt-5">Mobile Bazar</h1>
            </Fade>
            <div className="container">
                <div className="row d-md-flex align-items-center">
                    <Fade left duration={2000} distance="150px">
                        <div className="col-12 col-md-5">
                            <div className='mt-5'>

                            </div>
                        </div>
                    </Fade>
                    <Fade right duration={2000} distance="150px">
                        <div className="col-12 col-md-7" style={{ marginTop: '80px' }}>
                            <div className="mt-3 banner-text">
                                <h5 className="text-light text-start"><Flip cascade duration={2000}> JENNIFER F., CASPER CUSTOMER</Flip></h5>
                                <h1 className="text-light text-start "><Flip cascade duration={2000}>"Unbeatable price, and it’s super comfortable"</Flip></h1>
                                <p className="text-light text-start"><i><Flip cascade duration={2000}></Flip></i></p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Banner;