import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { useEffect } from 'react';
import ProductItem from './ProductItem';

const Bestseller = () => {
    const {products}= useContext(ShopContext);
    const [bestSeller,setBestSeller]= useState([]);

    useEffect(()=>{
        const bestProduct=products.filter((item)=>(item.bestSeller));
        setBestSeller(bestProduct.slice(0,5))
    },[])
  return (
    <div className='my-10'>
<div className='text-center text-3xl py-8'>
<Title text1={'BEST'} text2={'SELLERS'}/>
<p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
Discover the products that are flying off the shelves! Our bestsellers collection features customer favorites and highly-rated items that have earned their spot as the top picks.
</p>
</div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem  key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
                ))
            }

        </div>
  </div>
  )
}

export default Bestseller