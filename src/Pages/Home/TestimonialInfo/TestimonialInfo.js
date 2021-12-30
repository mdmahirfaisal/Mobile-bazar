import React from 'react';
import './TestimonialInfo.css';
import profileImg from './image/profile.jpg';
import Paper from '@mui/material/Paper';
import { Rating } from '@mui/material';


const TestimonialInfo = ({ review }) => {
    const { name, img, description, email, ratings } = review;
    return (
        <Paper variant="">
            <div className="test-card card h-100 border-0">
                <div className="banner">
                    <img src={img || profileImg} className='img-fluid' style={{ height: '100%', width: '50%', marginTop: '-50px', borderRadius: '100%' }} alt="" />
                </div>
                <div className="menu">

                </div>

                <div className="">
                    <h2 className="name mt-2 text-start ">{name}</h2>
                    <h6 className=" text-start title m-0">{email}</h6>
                    <h4 className='mb-0'><Rating name="half-rating-read" defaultValue={ratings || 5} precision={0.5} readOnly /></h4>
                    <small className='px-2 '><i>{description}</i></small>
                </div>


                {/* <div className="text-center">
                    <small><i>{description}</i></small>
                </div> */}
            </div>
        </Paper>
    );
};

export default TestimonialInfo;