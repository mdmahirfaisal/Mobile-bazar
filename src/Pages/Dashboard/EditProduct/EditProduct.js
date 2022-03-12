
import './EditProduct.css';
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';


const EditProduct = () => {
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    const [productImg, setProductImg] = useState(null)
    const [product, setProduct] = useState({})
    const [productImgName, setProductImgName] = useState("Image not selected")
    console.log(product)



    // load single data 
    useEffect(() => {
        fetch(`https://mysterious-waters-68327.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => Swal.fire({
                icon: 'error',
                title: `${error}`,
                showConfirmButton: false,
                timer: 3000
            }));
    }, [id]);



    // upload image
    const handleImgUpload = async e => {
        const imageData = new FormData();
        setProductImgName(e.target.files[0].name);
        imageData.set('key', 'b1329658ac9cd12416e1b24f8e686347');
        await imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(response => {
                console.log(response.data.data.display_url);

                setProductImg(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    };
    const onSubmit = productData => {
        console.log(productData);
        let data = {}
        if (productImg) {
            data.img = productImg;
        }
        else {
            data.img = product.img;
        }
        if (productData.name) {
            data.name = productData.name
        }
        else {
            data.name = product.name
        }
        if (productData.price) {
            data.price = productData.price
        }
        else {
            data.price = product.price
        }
        if (productData.description) {
            data.description = productData.description
        }
        else {
            data.description = product.description
        }
        data.id = product?._id

        axios.put('https://mysterious-waters-68327.herokuapp.com/updateProduct', data)
            .then(res => {
                console.log(res)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'This product edit Successfully',
                    showConfirmButton: false,
                    timer: 3000
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error}`,
                })
            })

    };

    const uploadFile = () => {
        document.getElementById('productImg').click();
    }

    return (
        <div className="container ">
            <h2 className="fw-bold text-secondary ">PLEASE UPDATE A  PRODUCT </h2>
            <p>{id}</p>


            <div className=" py-3" >
                <form name="myform" noValidate onSubmit={handleSubmit(onSubmit)} className=" row form-control border-0 bg-white shadow  py-4 px-3" style={{ maxWidth: '700px', margin: 'auto', borderRadius: '20px' }}>
                    <Form.Label className="text-start mt-2">Product name</Form.Label>
                    <input className="col-12 "
                        rows={1}
                        type="text"
                        placeholder="Product Name"
                        defaultValue={product.name}
                        {...register("name")} />

                    <Form.Label className="text-start mt-2">Product price</Form.Label>
                    <input className="col-12"
                        rows={1}
                        placeholder="Product Price"
                        defaultValue={product.price}
                        type="text" {...register("price")}
                    />

                    <div className='d-flex align-items-center justify-content-evenly mt-3'>
                        <div>
                            <Button variant="outlined" onClick={uploadFile} className="send-button">Upload image</Button>
                        </div>
                        <input id='productImg' style={{ display: 'none' }}
                            className="col-12 col-md-10"
                            name='image'
                            type="file" accept="image/*" onChange={handleImgUpload} />
                        <p className="text-start  mt-3">{productImgName}</p>
                    </div>

                    <Form.Label className="text-start  mt-4">Description</Form.Label>
                    <textarea aria-label="minimum height"
                        rows={8}
                        defaultValue={product.description}
                        placeholder="Description"
                        className="col-12 col-md-12 " style={{ borderRadius: '5px', width: '100%' }}  {...register("description")}
                    />
                    <Button type="submit" variant="contained" className=" w-100  rounded-pill" name="button">Update product</Button>

                </form>
            </div>

        </div>
    );
};

export default EditProduct;