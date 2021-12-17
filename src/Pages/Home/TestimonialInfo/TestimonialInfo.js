import React from 'react';
import './TestimonialInfo.css';
import Paper from '@mui/material/Paper';


const TestimonialInfo = ({ review }) => {
    const { name, image, message, email } = review;
    // console.log(name, message, email);
    return (
        <Paper variant="">
            <div className="test-card h-100 border-0">
                <div className="banner">
                    <img src={image} className='img-fluid' style={{ height: '100%', width: '50%', borderRadius: '100%' }} alt="" />
                </div>
                <div className="menu">
                    <div className="opener"><span></span><span></span><span></span></div>
                </div>

                <div className="">
                    <h2 className="name mt-2 text-start ">{name}</h2>
                    <h6 className=" text-start title">{email}</h6>
                </div>


                <div className="desc">{message} </div>
            </div>
        </Paper>
    );
};

export default TestimonialInfo;