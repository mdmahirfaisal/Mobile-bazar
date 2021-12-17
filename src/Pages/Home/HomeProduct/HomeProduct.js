import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { mobileProducts } from '../../Products/Products/Products';

const sliceProducts = mobileProducts.slice(0, 6);

const HomeProduct = () => {
    return (
        <div id='products' className='my-5'>
            <h2 className='text-secondary fw-bold mb-5'>OUR PRODUCTS</h2>
            <div className="container">
                <div className="row">
                    {
                        sliceProducts.map(product => <section className='col-12 col-md-6 col-lg-4 mb-5'>
                            <div className="product-container h-100 ">
                                <div className="product-container-inner">
                                    <div className="product-container-content">
                                        <span style={{ maxHeight: '', marginTop: '-80px' }}>2020 Passport</span>
                                        <h2 style={{ marginTop: '-80px' }}>{product.name} </h2>
                                    </div>

                                    <div className="product-container-lower">
                                        <img src={product.image} alt="honda png" style={{ maxHeight: '', marginTop: '-120px' }} className="image" />
                                        <ul className="features-list img-fluid">
                                            <li>{product.email} </li>
                                            <li>$ {product.price} </li>
                                            <li>Massage function for driver and passanger</li>
                                        </ul>
                                    </div>
                                </div>
                                <HashLink to="/placeOrder">
                                    <button className='cta fw-bold'>See more</button>
                                </HashLink>
                            </div>
                        </section>)
                    }
                </div>
                <div className='d-flex justify-content-end'>
                    <HashLink to="/products#products" className='text-decoration-none  fs-5 btn btn-outline-info mt-2 ms-auto py-2 rounded-pill '>... More Products</HashLink>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;