import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from '../Components/ProductCard';

const Home = () => {
const products = useLoaderData()
console.log(products);
    return (
        <div>
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

export default Home;