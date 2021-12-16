import React from 'react';
import Banner from '../../Home/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ProductsInfo from '../ProductsInfo/ProductsInfo';

export const mobileProducts = [
    {
        name: 'faisal',
        id: 1,
        price: 30,
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/7jvbGrp/mobile-man.jpg',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 2,
        price: 30,
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/7jvbGrp/mobile-man.jpg',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 3,
        price: 30,
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/7jvbGrp/mobile-man.jpg',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 4,
        price: 30,
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/7jvbGrp/mobile-man.jpg',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 5,
        price: '',
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/7jvbGrp/mobile-man.jpg',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 6,
        price: 30,
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/3d681NY/austin-distel-7b-Mdi-Iqz-J4-unsplash.png',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 7,
        price: 30,
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/3d681NY/austin-distel-7b-Mdi-Iqz-J4-unsplash.png',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 8,
        price: 30,
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/3d681NY/austin-distel-7b-Mdi-Iqz-J4-unsplash.png',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 9,
        price: 30,
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/3d681NY/austin-distel-7b-Mdi-Iqz-J4-unsplash.png',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 10,
        price: 30,
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/3d681NY/austin-distel-7b-Mdi-Iqz-J4-unsplash.png',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 11,
        price: 30,
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/3d681NY/austin-distel-7b-Mdi-Iqz-J4-unsplash.png',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
    {
        name: 'faisal',
        id: 12,
        price: 30,
        email: 'abcdefg@gmail.com',
        image: 'https://i.ibb.co/3d681NY/austin-distel-7b-Mdi-Iqz-J4-unsplash.png',
        message: 'Messages is a simple, helpful messaging app that keeps you connected with the people who matter most. Text anyone from anywhere across devices.'
    },
]

const Products = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <section id='products'>
                <h2>this is products</h2>

                <div className="container products-body">
                    <div className="row">
                        {
                            mobileProducts.map(product => <ProductsInfo
                                key={product.id}
                                product={product}
                            ></ProductsInfo>)
                        }
                    </div>
                </div>

            </section>
            <Footer></Footer>
        </>
    );
};

export default Products;