import React from 'react';
import { Link } from 'react-router';
import ProductCard from '../Components/ProductCard';
import useProducts from '../Hooks/useProducts';

const Home = () => {

const {products, loading, error}= useProducts()

const featuredProducts = products.slice(0,6)
// console.log(products);
    return (
        <div className='bg-emerald-50 '>
            <div className='flex justify-between pt-10 items-center  mx-9' >
                <h1 className='text-3xl font-semibold'>Featured Products</h1>
                <Link className='btn btn-outline bg-emerald-300' to="/products">See All Products</Link>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-emerald-50  '>
             {
                featuredProducts.map(product =>(
                   <ProductCard key={product.id} product={product}></ProductCard>
                ))
            }
           </div>
        </div>
    );
};

export default Home;