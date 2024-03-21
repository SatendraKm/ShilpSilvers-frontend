import React from "react";

const Wishlist = ({ wishlistItems, onRemoveFromWishlist }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover mb-2"
              />
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <p className="text-gray-500">€{item.price.toFixed(2)}</p>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => onRemoveFromWishlist(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
