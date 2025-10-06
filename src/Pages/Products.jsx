import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../Components/ProductCard';
import LoadingSpinner from '../Components/LoadingSpinner';

const Products = () => {
     const {products,loading} = useProducts()
    const [search,setSearch] =useState("")
    // console.log(search)
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term?products.filter(product =>product.name.toLocaleLowerCase().includes(term)) : products
//    console.log(searchedProducts)
    return (
        <div className='bg-emerald-50 '>
            <div className='flex justify-between pt-10 items-center  mx-9' >
                <h1 className='text-3xl font-semibold'>All Products  <span className='text-sm text-gray-500'>({searchedProducts.length}) Products found.</span></h1>
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search Products" />
</label>
            </div>
           {
            loading ? (<LoadingSpinner count={16}></LoadingSpinner>) : (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-emerald-50  '>
             {
                searchedProducts.map(product =>(
                   <ProductCard key={product.id} product={product}></ProductCard>
                ))
            }
           </div>)
           }
        </div>
    );
};

export default Products;