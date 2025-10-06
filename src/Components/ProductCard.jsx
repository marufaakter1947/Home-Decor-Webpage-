import React from 'react';

const ProductCard = ({product}) => {
    // console.log(product)
    const {name,image,price,category,description} = product;
    return (
        <div className="card bg-base-100 w-10/12 mx-auto  shadow-sm my-10 hover:scale-105 transition ease-in-out">
  <figure className='h-50 overflow-hidden '>
    <img className='w-full object-cover'
      src={image}
      alt="Furniture image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className='flex justify-between items-center  gap-20 my-4'>
        <p className='font-semibold'>Category: {category}</p>
        <p className='font-bold'>Price: ${price}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn font-bold bg-emerald-400">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;