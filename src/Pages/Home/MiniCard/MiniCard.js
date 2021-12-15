import React from 'react';

const MiniCard = () => {
    return (
        <div className='bg-light'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className='d-flex align-items-center py-5'>
                            <h1 className='text-secondary me-3 ms-5'>
                                <i className="fas fa-shipping-fast"></i>
                            </h1>
                            <div className=''>
                                <h5 className='m-0 '>FREE SHIPPING</h5>
                                <p className='text-secondary m-0'>For orders over $50</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className='d-flex align-items-center py-5'>
                            <h1 className='text-secondary me-3 ms-5'>
                                <i className="fas fa-percent"></i>
                            </h1>
                            <div className=''>
                                <h5 className='m-0 '>OFFICIAL DISCOUNTS</h5>
                                <p className='text-secondary m-0'>Save Big on next product</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className='d-flex align-items-center py-5'>
                            <h1 className='text-secondary me-3 ms-5'>
                                <i className="fas fa-blender-phone"></i>
                            </h1>
                            <div className=''>
                                <h5 className='m-0 '>24/7 HELPLINE</h5>
                                <p className='text-secondary m-0'>Care till the end</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MiniCard;