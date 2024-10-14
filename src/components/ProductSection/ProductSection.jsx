import React, { useEffect, useState } from 'react'
// import { storeData } from '../../assets/data/dummyData'
import ProductSectionItem from './ProductSectionItem'
import axios from "axios";


function ProductSection() {
    
    const [storeData, setStoreData] = useState([]);

    useEffect(() => {
        // Fetch data from backend API
        axios.get('/api/storeData')
            .then(response => {
                setStoreData(response.data);
                console.log(response.data)  // Update state with the fetched data
            })
            .catch(error => {
                console.log(error);
            });
    }, []); 
    
    return (
        <div>
            <div className='bg-black p-2 w-[50%] mx-auto rounded-md'>
                <h2 className='text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none'>SUMMER T-shirt SALE 30%</h2>
            </div>
            <div className='grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl'>
                {storeData.slice(0,6).map((product) => {
                    return (
                        <div key={product.id}>
                            <ProductSectionItem
                                id = {product.id}
                                img = {product.img}
                                name = {product.name}
                                text = {product.text}
                                price = {product.price}
                                totalPrice = {product.totalPrice || 200}
                                color = {product.color}
                                size = {product.size}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductSection