import React from 'react';
import './PhoneParts.css';
import cameraImg from './image/camera-removebg-preview.png';
import procImg from './image/processor-removebg-preview.png';
import ramImg from './image/ram-removebg-preview.png';

const PhoneParts = () => {
    return (
        <div id='parts' className='phone-parts-container mt-5 bg-white'>
            <section className='phone-parts-section'>
                <h2 className='fw-bold my-4'> WHAT MAKES THE ESSENTIAL DIFFERENT?</h2>
                <p className='text-secondary'>EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
                <div className="phone-container">
                    <div className="card">
                        <div className="content">
                            <h5 className='text-secondary fw-bold'>CAMERA</h5>
                            <div className="imgBx">
                                <img src={cameraImg} alt='Camera' />
                            </div>
                            <div className="contentBx">
                                <h3>PERFECT CUT<br /><span>DUAL CAMERA</span></h3>
                            </div>
                        </div>
                        <div className="sci">
                            <p>Tristique senectus et netus et malesuada ant reiet fames.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h5 className='text-secondary fw-bold'>PROCESSOR</h5>
                            <div className="imgBx">
                                <img src={procImg} alt='Processor' />
                            </div>
                            <div className="contentBx">
                                <h3>PRETTY<br /><span>INTELLIGENT PROCESSING</span></h3>
                            </div>
                        </div>
                        <div className="sci">
                            <p>Consequat ac habit amet asse felis donec et odio pellentesque diam.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h5 className='text-secondary fw-bold'>RAM</h5>
                            <div className="imgBx">
                                <img src={ramImg} alt='Ram' />
                            </div>
                            <div className="contentBx">
                                <h3>MOST POPULAR<br /><span>8GB DDR5 RAM</span></h3>
                            </div>
                        </div>
                        <div className="sci">
                            <p>Dictum varius duis at consectetur lorem donec massa sap faucibus.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PhoneParts;