import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Swal from 'sweetalert2'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const HomeProduct = () => {
    /// load All Products 
    const [allProducts, setAllProducts] = React.useState([]);
    React.useEffect(() => {
        fetch('https://mysterious-waters-68327.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error} check your internet connection`,

                })
            })
    }, []);

    const sliceProducts = allProducts?.slice(0, 6);
    const navigate = useNavigate();
    const handleCheckOut = id => {
        navigate(`/placeOrder/${id}`)
    }

    return (
        <div id='products' className='my-5'>
            <h2 className='text-secondary fw-bold mb-5'>OUR PRODUCTS</h2>
            <div className="container">
                <div className="row">
                    {
                        sliceProducts.map(product => <section key={product._id} className='col-12 col-md-6 col-lg-4 mb-5'>
                            <div className="product-container h-100 ">
                                <div className="product-container-inner">
                                    <div className="product-container-content">
                                        <span style={{ maxHeight: '', marginTop: '-80px' }}></span>
                                        <h2 style={{ marginTop: '-80px' }}>{product?.name} </h2>
                                    </div>

                                    <div className="product-container-lower">
                                        <img src={product?.img} alt="honda png" style={{ maxHeight: '', marginTop: '-100px' }} className="image" />
                                        <ul className="features-list img-fluid">
                                            <li>{product?.name} </li>
                                            <li>$ {product?.price} </li>
                                            <li> <small>{product?.description.slice(0, 40)}</small></li>
                                        </ul>
                                    </div>
                                </div>

                                <button onClick={() => handleCheckOut(product?._id)} className='cta fw-bold'><ShoppingCartIcon className='me-2' /> Buy now</button>

                            </div>
                        </section>)
                    }
                </div>
                <div className='d-flex justify-content-end' style={{ marginTop: '-30px' }}>
                    <HashLink to="/products#products" className='text-decoration-none  fs-5 btn btn-outline-dark  ms-auto  py-0 '>More Products ..<KeyboardDoubleArrowRightIcon /></HashLink>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;