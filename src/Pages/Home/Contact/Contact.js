import React from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";


const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset()
    };


    return (
        <div className="section-container">
            <section id="contact">

                <h1 className="section-header">Contact</h1>

                <div className="contact-wrapper">


                    <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="form-horizontal">

                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control" id="name" placeholder="NAME" {...register("name")} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="email" className="form-control" id="email" placeholder="EMAIL" {...register("email")} required />
                            </div>
                        </div>

                        <textarea className="form-control" rows="10" placeholder="MESSAGE" {...register("message")} required></textarea>

                        <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            <div className="alt-send-button">
                                <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                            </div>

                        </button>

                    </form>



                    <div className="direct-contact-container">

                        <ul className="contact-list text-start">
                            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Rajshahi, Bangladesh</span></i></li>

                            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">+880 01928646555</a></span></i></li>

                            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">rjmahir.faisal@gmail.com</a></span></i></li>

                        </ul>

                        <hr />
                        <ul className="social-media-list">
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

            </section>
        </div>
    );
};

export default Contact;