import React, { useState, useEffect } from 'react';
import { getCart, updateCartItem, removeFromCart } from '../services/api';
import CartCard from '../components/CartCard';

function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart('user123');
        setCart(data);
      } catch (error) {
        console.error('Error fetching cart:', error);
        setError('Failed to load cart');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleUpdateQuantity = async (productId, quantity) => {
    try {
      await updateCartItem('user123', productId, quantity);
      const updatedCart = await getCart('user123');
      setCart(updatedCart);
    } catch (error) {
      console.error('Error updating cart item:', error);
      alert('Failed to update cart item');
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      await removeFromCart('user123', productId);
      const updatedCart = await getCart('user123');
      setCart(updatedCart);
    } catch (error) {
      console.error('Error removing item from cart:', error);
      alert('Failed to remove item from cart');
    }
  };

  if (loading) {
    return <div className="text-center py-16 text-2xl text-yellow-300">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-2xl text-yellow-300">{error}</div>;
  }

  if (!cart || cart.items.length === 0) {
    return <div className="text-center py-16 text-2xl text-yellow-300">Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-yellow-300">Your Cart</h1>
      <div className="bg-gray-900 rounded-lg shadow-md p-6">
        {cart.items.map((item) => (
          <CartCard
            key={item.product._id}
            item={item}
            updateQuantity={handleUpdateQuantity}
            removeItem={handleRemoveItem}
          />
        ))}
      </div>
      <div className="mt-8 text-right">
        <h2 className="text-2xl font-bold text-yellow-300">
          Total: Rs.{cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)}
        </h2>
        <button className="mt-4 bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300 transform hover:scale-105">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;