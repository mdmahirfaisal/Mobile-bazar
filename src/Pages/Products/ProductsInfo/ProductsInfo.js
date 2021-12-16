import React from 'react';
import './ProductInfo.css';

const ProductsInfo = ({ product }) => {
    console.log(product.name)
    return (
        <section className='col-12 col-md-6 col-lg-4 mb-5'>
            <div className="product-container h-100 ">
                <div className="product-container-inner">
                    <div className="product-container-content">
                        <span>2020 Passport</span>
                        <h2>The Adventurer </h2>
                    </div>

                    <div className="product-container-lower">
                        <img src="https://images.jazelc.com/uploads/galpinhonda/12454_st1280_089.png" alt="honda png" className="image" />
                        <ul className="features-list">
                            <li>Active cruise with stop and go</li>
                            <li>Steering and lane control</li>
                            <li>Massage function for driver and passanger</li>
                        </ul>
                    </div>
                </div>
                <button className='cta fw-bold'>See more</button>
            </div>
        </section>
    );
};

export default ProductsInfo;