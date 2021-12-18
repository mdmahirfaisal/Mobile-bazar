import { useState, useEffect } from "react";
import Swal from 'sweetalert2'



/// All Products 
const useProductData = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
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

    return allProducts
}

export default useProductData;