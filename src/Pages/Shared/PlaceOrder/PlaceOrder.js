import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './PlaceOrder.css';
import './PlaceOrder.css';
import { Container } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { TextField, Button, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import useFirebase from '../../../hooks/useFirebase';


const PlaceOrder = () => {
    const { user } = useFirebase();
    const { detailId } = useParams()
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const [productUpload, setProductUpload] = useState(false);


    // load single form specific ID
    useEffect(() => {
        fetch(`https://mysterious-waters-68327.herokuapp.com/products/${detailId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => {
                console.log(error);
            })
    }, [detailId]);



    const { name, price, img, description } = product;
    const addOrder = {
        name,
        price,
        img,
        description
    };

    /// Add order to database
    const handlePlaceOrder = (data) => {
        console.log(data)

        const userData = { status: 'pending', name: user.displayName, email: user.email, phone: data.phone, address: data.address };
        const newOrder = { ...userData, ...addOrder, orderTime: new Date() };
        setProductUpload(true)
        fetch('https://mysterious-waters-68327.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                setProductUpload(false)
                reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Yes...',
                    text: 'Your order placed successfully',
                })

            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `${error.message}`,
                })
            })
    };

    return (
        <div>
            <Navigation></Navigation>
            <section className='place-section'>
                <h1 className='mb-4 text-secondary fw-bold'>CHECK OUT NOW:  </h1>
                {productUpload && <CircularProgress></CircularProgress>}
                <Container>
                    <div className="card h-100 border-0 shadow">
                        <div className=" ">
                            <HashLink to="/products" className='w-100 '>  <h5 className="bg-primary text-light py-2 rounded">
                                <i className="fa fa-arrow-left"></i></h5></HashLink>
                        </div>
                        <h2 className='bg-light py-2 mb-2'>{name}</h2>
                        <div className=" row">
                            <div className="half col-12 col-md-6">
                                <div className="row">
                                    <p className=" col-12 col-md-6">Smart phone</p>
                                    <h5 className="price col-12 col-md-6">$ {price} </h5>
                                </div>
                                <div className="mb-3">
                                    <img src={img} className='img-fluid' alt="" />
                                </div>
                                <div className="description text-start px-3">
                                    <p>{description}</p>
                                </div>
                            </div>
                            <div className="half col-sm-12 col-md-6">
                                <form onSubmit={handleSubmit(handlePlaceOrder)} className=" w-100 h-100  p-3 ">
                                    <TextField variant="standard" type="text" defaultValue={user.displayName || ""} label="Name (optional)" /> <br /> <br />
                                    <TextField variant="standard" type="email" defaultValue={user.email || ""} label="Email (optional)" /> <br /> <br />
                                    <TextField variant="standard" label="Phone" required   {...register("phone")} /> <br /> <br />

                                    <TextField variant="standard"  {...register("address", { required: true })} label="Address" /> <br /> <br />
                                    <Button type="submit" variant="contained" className=" w-100  rounded-pill"> Place order</Button>
                                </form>

                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;