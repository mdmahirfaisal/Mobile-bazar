import React from 'react';
import './RaiseSection.css';

const RaiseSection = () => {
    return (
        <div className='mt-5 pb-5 bg-light'>
            <div className="container">
                <h2 className='pt-5'>RAISE YOUR EXPECTATIONS</h2>
                <h6 className='text-secondary mb-5 pb-4'>REFINED VIEWING EXPERIENCE</h6>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className=''>
                            <h5 className='fw-bold text-start'>42 FRONT CAMERA FOR PERFECT SHOT</h5>
                            <p className='fw-light text-start text-secondary ' style={{ width: "90%" }}>A mobile phone, cellular phone, cell phone, cellphone, handphone, or hand phone, sometimes shortened to simply mobile, cell or just phone, is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area. The radio frequency link establishes a connection to the switching systems of a mobile phone operator, which provides access to the public switched telephone network (PSTN). Modern mobile telephone services use a cellular network</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="raise-card">
                            <img src="https://i.ibb.co/S3BZwNm/4k-hdr.jpg" className='img-fluid d-block w-100' alt='Phone img' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RaiseSection;