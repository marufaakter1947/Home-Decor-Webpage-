import React, { useEffect, useState } from "react";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) {
      setWishlist(savedList);
    }
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "price-asc") {
      return [...wishlist].sort((a, b) => {
        return a.price - b.price;
      });
    } else if (sortOrder === "price-desc") {
      return [...wishlist].sort((a, b) => {
        return b.price - a.price;
      });
    } else {
      return wishlist;
    }
  })();

  const handleRemove = (id) => {
     const existingList = JSON.parse(localStorage.getItem("wishlist"))
        let updatedList =existingList.filter(p=>p.id !==id)
        // for ui instant update
        setWishlist(prev => prev.filter(p=>p.id !== id))
localStorage.setItem("wishlist", JSON.stringify(updatedList))
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between pt-10 items-center  mx-9">
        <h1 className="text-3xl font-semibold">
          Wishlist{" "}
          <span className="text-sm text-gray-500">
            ({sortedItem.length}) Products found.
          </span>
        </h1>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by price</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3 px-8 ">
        {sortedItem.map((p) => (
          <div
            key={p.id}
            className="card mb-6 card-side bg-base-100 shadow-sm border "
          >
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={p.image}
                alt={p.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.name}</h2>
              <p className="text-base-content/70">{p.category}</p>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <div className="font-semibold">${p.price}</div>
              <button onClick={()=>handleRemove(p.id)} className="btn btn-outline">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
