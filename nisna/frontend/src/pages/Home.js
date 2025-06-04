  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';

  function Home() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState({ title: '', content: '' });

  

    const handleLinkClick = (type) => {
      let content = '';
      if (type === 'contact') {
      setDialogContent({ title: 'Contact Information', content });
      } else if (type === 'privacy') {
        content = 'Privacy Policy details .';
        setDialogContent({ title: 'Privacy Policy', content });
      } else if (type === 'terms') {
        content = 'Terms of Service details';
        setDialogContent({ title: 'Terms of Service', content });
      }
      setIsDialogOpen(true);
    };

    const closeDialog = () => {
      setIsDialogOpen(false);
    };

    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <div 
            className="text-center py-24 bg-cover bg-center relative"
            style={{ backgroundImage: "url('https://www.endscuoio.com/wp-content/uploads/2023/02/motorcycle-books.jpg')" }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4">
              <h1 className="text-6xl font-bold mb-8 text-yellow-300">Welcome to RideUp</h1>
              <p className="text-2xl mb-12 text-white">Elevate Your Ride with Premium Motorcycle Accessories</p>
              <Link 
                to="/market" 
                className="bg-yellow-500 text-black px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-600 transition duration-300 transform hover:scale-105 inline-block shadow-lg"
              >
                Explore Our Collection
              </Link>
            </div>
          </div>

          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Why Choose RideUp?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-600">Premium Quality</h3>
                  <p className="text-gray-600">We offer only the highest quality motorcycle accessories from trusted brands.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-600">Expert Advice</h3>
                  <p className="text-gray-600">Our team of motorcycle enthusiasts is here to help you find the perfect upgrades.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-600">Fast Shipping</h3>
                  <p className="text-gray-600">Enjoy quick and reliable shipping on all orders, so you can hit the road sooner.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-800 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-8"> Join Our Community</h2>
              <p className="text-xl mb-12">Stay updated with the latest products, exclusive offers, and riding tips.</p>
              <form className="max-w-md mx-auto">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800"
                  />
                  <button 
                    type="submit" 
                    className="bg-yellow-500 text-black px-6 py-2 rounded-r-full font-semibold hover:bg-yellow-600 transition duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        <footer className="bg-black text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 RideUp. All rights reserved.</p>
            <div className="mt-4">
              <button onClick={() => handleLinkClick('contact')} className="text-yellow-300 hover:text-yellow-500 mx-2">Contact Us</button>
              <button onClick={() => handleLinkClick('privacy')} className="text-yellow-300 hover:text-yellow-500 mx-2">Privacy Policy</button>
              <button onClick={() => handleLinkClick('terms')} className="text-yellow-300 hover:text-yellow-500 mx-2">Terms of Service</button>
            </div>
          </div>
        </footer>

        {isDialogOpen && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4 text-black">{dialogContent.title}</h2>
        <p className="mb-4 text-black">{dialogContent.content}</p>
        <button onClick={closeDialog} className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-300">Close</button>
      </div>
    </div>
  )}
      </div>
    );
  }

  export default Home;