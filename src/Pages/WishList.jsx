import React, { useEffect, useState } from "react";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) {
      setWishlist(savedList);
    }
  }, []);
  return (
    <div className="space-y-6">
      <div className="flex justify-between pt-10 items-center  mx-9">
        <h1 className="text-3xl font-semibold">
          Wishlist{" "}
          <span className="text-sm text-gray-500">
            ({wishlist.length}) Products found.
          </span>
        </h1>

        <button>Sort</button>
      </div>
      <div className="space-y-3 px-8 ">
{
    wishlist.map(p=><div className="card mb-6 card-side bg-base-100 shadow-sm border ">
  <figure>
    <img
    className="w-40 h-28 object-cover"
      src={p.image}
      alt={p.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{p.name}</h2>
    <p className="text-base-content/70">{p.category}</p>

   
  </div>
  <div className="pr-4 flex items-center gap-3">
    <div className="font-semibold">${p.price}</div>
    <button className="btn btn-outline">Remove</button>
  </div>

</div>)
}
      </div>
    </div>
  );
};

export default WishList;
