import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './PlaceOrder.css';

const PlaceOrder = () => {
    return (
        <div>
            <Navigation></Navigation>
            <section className='place-section'>
                <h2 className='mb-4 text-secondary fw-bold'>CHECK OUT NOW </h2>
                <div className="place-card">
                    <div className="card__title">
                        <HashLink to="/products" className='w-50 '>  <h5 className="icon w-100 rounded">
                            <i className="fa fa-arrow-left"></i></h5></HashLink>

                        <h3 className='w-100 text-center '>New products</h3>
                    </div>
                    <div className="card__body row">
                        <div className="half col-12 col-md-6">
                            <div className="featured_text">
                                <h1>Nurton</h1>
                                <p className="sub">Smart phone</p>
                                <p className="price">$ 610.00</p>
                            </div>
                            <div className="place-image">
                                <img src="https://i.ibb.co/JqxhFv4/sammy-williams-38-Un6-Oi5be-E-unsplash.png" alt="" />
                            </div>
                        </div>
                        <div className="half col-12 col-md-6">
                            <div className="description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.</p>
                            </div>
                            <span className="stock"><i className="fa fa-pen"></i> In stock</span>
                            <div className="reviews">
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                </ul>
                                <span>(64 reviews)</span>
                            </div>
                        </div>
                    </div>
                    <div className="card__footer row">
                        <div className="recommend col-12 col-md-6 mb-3">
                            <p>Recommended by</p>
                            <h3>Andrew Palmer</h3>
                        </div>
                        <div className="action col-12 col-md-6 ">
                            <button type="button">Add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;