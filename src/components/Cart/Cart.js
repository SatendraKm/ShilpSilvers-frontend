import Wishlist from "../common/Wishlist";
import React, { useState } from "react";

const CartComponent = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Bustier, Calvin Klein Underwear",
      color: "sonata",
      size: "S",
      price: 24.45,
      image: "https://example.com/bustier.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Bikini-top, Tommy Hilfiger",
      color: "navy blazer",
      size: "S",
      price: 39.95,
      image: "https://example.com/bikini-top.jpg",
      quantity: 1,
    },
    {
      id: 3,
      name: "Short tights, Nike Performance",
      color: "thunder gray",
      size: "S",
      price: 29.99,
      image: "https://example.com/short-tights.jpg",
      quantity: 1,
    },
  ]);

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const getTotalCost = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const handleRemoveFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <div className="flex">
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Shopping cart</h2>
            <span className="text-gray-500">{cartItems.length} items</span>
          </div>

          <div className="mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">
                    Color: {item.color}, Size: {item.size}
                  </p>
                  <div className="flex items-center">
                    <p className="text-gray-700 mr-2">
                      €{item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="ml-4 text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/3 bg-white p-6 rounded-lg shadow-md ml-4">
          <h2 className="text-xl font-bold mb-4">Checkout</h2>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-semibold mb-2"
            >
              Delivery Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter your address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="paymentMethod"
              className="block text-gray-700 font-semibold mb-2"
            >
              Payment Method
            </label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">Select a payment method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          {paymentMethod === "creditCard" && (
            <div className="mb-4">
              <label
                htmlFor="paymentDetails"
                className="block text-gray-700 font-semibold mb-2"
              >
                Card Details
              </label>
              <input
                type="text"
                id="paymentDetails"
                value={paymentDetails}
                onChange={(e) => setPaymentDetails(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Enter your card details"
              />
            </div>
          )}
          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Total (incl. VAT)</span>
            <span className="text-xl font-bold">
              €{getTotalCost().toFixed(2)}
            </span>
          </div>
          <div className="flex justify-end">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Wishlist
        wishlistItems={wishlistItems}
        onRemoveFromWishlist={handleRemoveFromWishlist}
      />
    </>
  );
};

export default CartComponent;
