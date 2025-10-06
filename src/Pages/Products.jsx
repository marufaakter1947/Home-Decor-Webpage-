import React from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../Components/ProductCard';

const Products = () => {
    const {products} = useProducts()
    return (
        <div className='bg-emerald-50 '>
            <div className='flex justify-between pt-10 items-center  mx-9' >
                <h1 className='text-3xl font-semibold'>All Products</h1>
                <button className='btn btn-outline bg-emerald-300' to="/products">Search</button>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-emerald-50  '>
             {
                products.map(product =>(
                   <ProductCard key={product.id} product={product}></ProductCard>
                ))
            }
           </div>
        </div>
    );
};

export default Products;