import React from 'react';

function CartCard({ item, updateQuantity, removeItem }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-700 py-4 hover:bg-gray-800 transition duration-300">
      <div className="flex items-center">
        <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover mr-4 rounded-md" />
        <div>
          <h2 className="text-lg font-semibold text-yellow-300">{item.product.name}</h2>
          <p className="text-white font-bold">Rs.{item.product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.product._id, parseInt(e.target.value))}
          className="border rounded px-2 py-1 w-16 mr-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-white"
        />
        <button
          onClick={() => removeItem(item.product._id)}
          className="text-yellow-300 hover:text-yellow-500 font-semibold transition duration-300"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartCard;