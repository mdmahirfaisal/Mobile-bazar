import React from 'react';
// import useAuth from '../../../hooks/useAuth';
import Banner from '../../Home/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ProductsInfo from '../ProductsInfo/ProductsInfo';
import Swal from 'sweetalert2'


// https://i.ibb.co/nMX1jGc/1.jpg
// https://i.ibb.co/b63Pstw/2.jpg
// https://i.ibb.co/59NrxM8/3.jpg
// https://i.ibb.co/s3NKfxc/4.jpg
// https://i.ibb.co/hZyMTZb/5.jpg
// https://i.ibb.co/qnwqm8T/6.jpg
// https://i.ibb.co/6N4H7pf/7.jpg
// https://i.ibb.co/Jcfv4R4/8.jpg
// https://i.ibb.co/qkr9G7z/9.jpg
// https://i.ibb.co/f9R0ftR/10.jpg
// https://i.ibb.co/WFQycw9/11.jpg
// https://i.ibb.co/L6RCdRF/12.jpg


export const mobileProducts = [
    {
        name: 'Apple iPhone 13 Pro Max',
        price: 1099,
        image: 'https://i.ibb.co/nMX1jGc/1.jpg',
        description: `Finally giving in to market trends, Apple's fitted the 13 Pro and Pro Max with 120Hz displays - or, rather, ProMotion. They're the adaptive kind, theoretically capable of variable refresh rates to reach all the way down to 10Hz to preserve battery. That's in addition to an already great screen feature set that includes DolbyVision support, plenty of brightness and excellent color rendition.`
    },
    {
        name: 'Samsung Galaxy S21 Ultra 5G',
        price: 1179.99,
        image: 'https://i.ibb.co/b63Pstw/2.jpg',
        description: `The original S20 Ultra was supposed to be the greatest Galaxy to date, but it fell short of that. You could enjoy a 120Hz refresh rate, but only at a lower 1080p resolution. The telephoto camera was advertised as 5x, but it was, in fact, 4x, and let's not even start with the Space Zoom. The ultrawide camera had a great sensor, but it couldn't do macro shots due to the lack of autofocus. The battery was large, but battery life was poor. You get the point.`
    },
    {
        name: 'Samsung Galaxy Tab S8 Ultra ',
        price: 540.99,
        image: 'https://i.ibb.co/59NrxM8/3.jpg',
        description: `Hoping there is an 8" version of this tablet. This is the ideal size for me for tablet 8 inches. This version is a laptop size already and need to be water-resistant cuz some uses it for watching recipe while cooking.`
    },
    {
        name: 'Samsung Galaxy A53 5G',
        price: 499.90,

        image: 'https://i.ibb.co/s3NKfxc/4.jpg',
        description: `Preach!
        Also, it seems that it'd be the last good phone along with Pixels 4a 5g & 5a 5g with a headphone jack that has a decent camera with OIS, a fairly good SoC, reliable software support, good user experience and good overall build quality; all of this in a reasonable price.`
    },
    {
        name: 'Google Pixel 6 Pro',

        price: 849.99,
        image: 'https://i.ibb.co/hZyMTZb/5.jpg',
        description: `why would you compare a flagship to a midrange phone? Flagship equals flagship right! (Pixel 6 pro/iPhone 13 pro Max) So, if you want to go that low! then we have midrange Pixel 6 for just $599. LOL ... Basically, Google has annihilated every other phone with its price, because it offers more for such a low price!`
    },
    {
        name: 'Xiaomi Poco X3 Pro ',
        price: 399.49,
        image: 'https://i.ibb.co/qnwqm8T/6.jpg',
        description: `Please all this you've explained, plus give a good description how to do it on our phone. E.g= go to settings_ tap on battery.......e.t.c just for example`
    },
    {
        name: 'Xiaomi Mi 11 Ultra ',
        price: 989.00,

        image: 'https://i.ibb.co/6N4H7pf/7.jpg',
        description: `It is worth mentioning that this device with software 12.0 once released was the 2nd most buggy software I ever used.
        BUT!!! since 12.5.4 I almost have not seen a single bug in this device, and it is the cleanest and most stable software I ever used. and right now I am on 12.5.8 global latest version released yesterday.`
    },
    {
        name: 'OnePlus 9 Pro',

        price: 1099.00,
        image: 'https://i.ibb.co/Jcfv4R4/8.jpg',
        description: `and 1+ has apparently in 12 update limited 3rd party camera apps such as gcam, to only work with the main sensor. what is the battery life on oneplus 9pro while playing COD mobile? `
    },
    {
        name: 'Apple iPhone 12',
        price: 1219.49,
        image: 'https://i.ibb.co/qkr9G7z/9.jpg',
        description: `I'm a happy user of iPhone12 in India. It's fast, fluid and light in weight. I gifted this to my wife and she is happy. I personally use iPhone11, which is also a good iPhone but little bulky and no night mode in front camera.`
    },
    {
        name: 'Apple iPhone 7 Plus',
        price: 879.00,
        image: 'https://i.ibb.co/f9R0ftR/10.jpg',

        description: `This is called battery depletion my Friend and there's nothing you can do except changing the battery. But time has changed and batteries had increased in capacity nearly 4000 for iphone and up to 6000 for Android which is a great improvement but I don't understand why ipad and airpods batteries are rated at 1000 cycles but the iphone is rated 500 cycles.`
    },
    {
        name: 'Apple iPhone XR',
        price: 1049.99,
        image: 'https://i.ibb.co/WFQycw9/11.jpg',
        description: `The battery life is pretty good. I can go a full day while online which is really cool. Of course battery life is dependant on your usage. I would say it is sufficient. I can live full day no problem if I'm not playing games. Hospot though drains battery in an hour or two`
    },
    {
        name: 'Honor X30',
        price: 489.99,
        image: 'https://i.ibb.co/L6RCdRF/12.jpg',
        description: `For people who worry about the google service not supported ,it actually happened they the honor 50 lite it wasn't support when it was leaked but it now its supports goigle service BUT outside *china*`
    },
]

const Products = () => {
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
                    text: `${error} `,

                })
            })
    }, []);


    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <section id='products'>
                <h2 className='text-secondary fw-bold my-5'>OUR ALL PRODUCTS</h2>
                <hr className='w-100 mb-5' />

                <div className="container products-body">
                    <div className="row">
                        {
                            allProducts.map(product => <ProductsInfo
                                key={product._id}
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