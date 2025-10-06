import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';

const ProductDetails = () => {
    const {id} = useParams()
    // console.log(id)
    const {products,loading,error} =useProducts()
    const product = products.find(p=>String(p.id) ===id)
    

    if(loading) return <p>Loading....</p>

    const {name,image,description,category,price} = product  || {}

    const handleAddToWishList =()=>{
        const existingList = JSON.parse(localStorage.getItem("wishlist"))
        let updatedList =[]
        if(existingList){
            const isDuplicate =existingList.some(p =>p.id === product.id)
            if(isDuplicate) return alert("Already exist!")
            updatedList = [...existingList, product]
        }else{
            updatedList.push(product)
        }
localStorage.setItem("wishlist", JSON.stringify(updatedList))
    }

    return (
        <div className="card bg-base-100 w-10/12 mx-auto  shadow-sm my-10">
  <figure className='h-80 overflow-hidden '>
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
      <button onClick={handleAddToWishList}  className="btn font-bold bg-emerald-400">Add to Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default ProductDetails;