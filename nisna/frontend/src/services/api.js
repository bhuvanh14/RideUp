import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update this to your actual API URL

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};



export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};

export const getCart = async (userId) => {
  const response = await axios.get(`${API_URL}/cart/${userId}`);
  return response.data;
};

export const addToCart = async (userId, productId, quantity) => {
  const response = await axios.post(`${API_URL}/cart/${userId}/add`, { productId, quantity });
  return response.data;
};

export const updateCartItem = async (userId, productId, quantity) => {
  const response = await axios.put(`${API_URL}/cart/${userId}/update`, { productId, quantity });
  return response.data;
};

export const removeFromCart = async (userId, productId) => {
  const response = await axios.delete(`${API_URL}/cart/${userId}/remove/${productId}`);
  return response.data;
};