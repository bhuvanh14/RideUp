import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getAllProducts, addToCart } from '../services/api';

function Market() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        if (category) {
          const filteredProducts = data.filter(product => product.category.toLowerCase() === category.toLowerCase());
          setProducts(filteredProducts);
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const handleAddToCart = async (product) => {
    try {
      await addToCart('user123', product._id, 1);
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('Failed to add product to cart');
    }
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const sortedAndFilteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price') {
        return a.price - b.price;
      }
      return 0;
    });

  if (loading) {
    return <div className="text-center py-16 text-2xl text-yellow-300">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-2xl text-yellow-300">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-yellow-300">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'All Products'}
      </h1>
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <label htmlFor="sort" className="mr-2 text-yellow-300">Sort by:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={handleSort}
            className="bg-gray-800 text-yellow-300 rounded px-2 py-1"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="bg-gray-800 text-yellow-300 rounded px-4 py-2 w-full sm:w-auto"
          />
        </div>
      </div>
      {sortedAndFilteredProducts.length === 0 ? (
        <p className="text-center text-yellow-300 text-xl">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sortedAndFilteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} addToCart={handleAddToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Market;
