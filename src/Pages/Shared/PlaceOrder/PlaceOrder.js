import React from 'react';
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
                        <div className="icon">
                            <a href="google.com"><i className="fa fa-arrow-left"></i></a>
                        </div>
                        <h3>New products</h3>
                    </div>
                    <div className="card__body">
                        <div className="half">
                            <div className="featured_text">
                                <h1>Nurton</h1>
                                <p className="sub">Office Chair</p>
                                <p className="price">$210.00</p>
                            </div>
                            <div className="image">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/613A7vcgJ4L._SL1500_.jpg" alt="" />
                            </div>
                        </div>
                        <div className="half">
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
                    <div className="card__footer">
                        <div className="recommend">
                            <p>Recommended by</p>
                            <h3>Andrew Palmer</h3>
                        </div>
                        <div className="action">
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