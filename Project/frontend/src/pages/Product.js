import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, addToCart } from '../services/api';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      await addToCart('user123', id, quantity); // Replace 'user123' with actual user ID
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  if (!product) {
    return <div className="text-yellow-300">Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
        <h1 className="text-3xl font-bold mb-4 text-yellow-300">{product.name}</h1>
        <p className="text-xl mb-4 text-white">${product.price.toFixed(2)}</p>
        <p className="mb-4 text-white">{product.description}</p>
        <div className="flex items-center mb-4">
          <label htmlFor="quantity" className="mr-2 text-white">Quantity:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border rounded px-2 py-1 w-16 text-black"
          />
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;