import React from 'react';

function ProductCard({ product, addToCart }) {
  if (!product) return null;

  return (
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-yellow-300">{product.name}</h2>
        <p className="text-white font-bold mb-2">
          Rs.{product.price ? product.price.toFixed(2) : 'N/A'}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;