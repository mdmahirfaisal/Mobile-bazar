import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductInfo.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ProductsInfo = ({ product }) => {
    const { name, _id, img, price, description } = product;

    const navigate = useNavigate();
    const handleCheckOut = id => {
        navigate(`/placeOrder/${id}`)
    }

    // console.log(product.img)
    return (
        <section className='col-12 col-md-6 col-lg-4 mb-5'>
            <div className="product-container h-100">
                <div className="product-container-inner">
                    <div className="product-container-content">
                        <span style={{ marginTop: '-80px' }}></span>
                        <h4 style={{ marginTop: '-80px' }}>{name} </h4>
                    </div>

                    <div className="product-container-lower">
                        <img src={img} style={{ marginTop: '-100px' }} alt="honda png" className="image" />
                        <ul className="features-list img-fluid">
                            <li>{name} </li>
                            <li>$ {price} </li>
                            <li> <small>{description?.slice(0, 40)}</small></li>
                        </ul>
                    </div>
                </div>

                <button onClick={() => handleCheckOut(_id)} className='cta fw-bold'><ShoppingCartIcon className='me-2' /> Buy now</button>


            </div>
        </section>
    );
};

export default ProductsInfo;