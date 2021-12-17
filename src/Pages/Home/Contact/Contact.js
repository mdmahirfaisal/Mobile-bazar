import React from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Email from '@mui/icons-material/Email';
import { TextareaAutosize, Button } from '@mui/material';



const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset()
    };


    return (

        <section id="contact" className='section-container'>

            <div className="container">
                <h1 className="section-header">Contact</h1>

                <div className=" row">
                    <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="col-sm-12 col-md-6 mb-4">
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', backgroundColor: 'white', marginBottom: '10px', borderRadius: '10px', padding: '2px 5px' }}>
                            <AccountCircle className='mb-2' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField className="w-100 mb-2"
                                {...register("name")} required
                                label="NAME" variant="standard" />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-end', backgroundColor: 'white', marginBottom: '10px', borderRadius: '10px', padding: '0px 5px' }}>
                            <Email className='mb-2' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField className="w-100 mb-2"
                                {...register("email")} required
                                label="EMAIL" variant="standard" />
                        </Box>

                        <TextareaAutosize
                            className="d-block w-100 "
                            style={{ borderRadius: '5px', width: '100%' }} rows={10} {...register("description", { required: true })}
                            minRows={5}
                            placeholder="Description"
                        />
                        <Button type="submit" variant="outlined" className=" mt-3 pt-3 w-100 bg-white rounded-pill send-button ">
                            <div className="alt-send-button">
                                <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                            </div>
                        </Button>
                    </form>


                    <div className="direct-contact-container col-sm-12 col-md-6">
                        <ul className="contact-list text-start  mx-auto" style={{ width: '75%' }}>

                            <li className="list-item"><i className="fa fa-phone text-danger fa-2x me-"><span className="contact-text phone ms-3"> 01928646555</span></i></li>

                            <li className="list-item"><i className="fa fa-envelope text-danger fa-2x me-"><a href="mailto:#" title="Send me an email" className='text-decoration-none'><span className="contact-text gmail ms-3">rjmahir.faisal@gmail.com</span></a></i></li>

                            <li className="list-item"><i className="fa fa-map-marker text-danger fa-2x me-"><span className="contact-text place ms-3">Rajshahi, Bangladesh</span></i></li>
                        </ul>
                        <hr />
                        <ul className="social-media-list" >
                            <li><a href={`https://github.com/mdmahirfaisal`} target="_blank" rel="noopener noreferrer" className="  " ><i className="fab fa-github  "></i></a>
                            </li>
                            <li><a href={`https://drive.google.com/file/d/1IWDXgsTltXLd81c202tLphDiYI-JgIIW/view?usp=sharing`} target="_blank" rel="noopener noreferrer" className="" ><i className="fab fa-google  "></i></a>
                            </li>
                            <li><a href={`https://www.facebook.com/profile.php?id=100069936932811`} target="_blank" rel="noopener noreferrer" className="" ><i className="fab fa-facebook  "></i></a>
                            </li>
                            <li>
                                <a href={`https://www.linkedin.com/in/mahir-faisal/`} target="_blank" rel="noopener noreferrer" className="" ><i className="fab fa-linkedin-in  "></i></a>
                            </li>
                        </ul>
                        <hr />
                        <div className="copyright text-secondary">&copy; ALL OF THE RIGHTS RESERVED</div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;