import React from 'react';

function AboutUs() {
    const [activeTab, setActiveTab] = React.useState('about');
    const [expandedFAQs, setExpandedFAQs] = React.useState({});
  
    const tabs = [
      { id: 'about', label: 'About Us' },
      { id: 'values', label: 'Our Values' },
      { id: 'testimonials', label: 'Testimonials' },
      { id: 'faq', label: 'FAQ' },
    ];
  
    const faqs = [
      { question: "What types of products does RideUp offer?", answer: "RideUp offers a wide range of motorcycle accessories and parts, including performance upgrades, safety gear, and stylish accessories for all types of riders." },
      { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to many countries. Shipping costs and delivery times may vary depending on the destination." },
      { question: "What is your return policy?", answer: "We offer a 30-day return policy for most items. Products must be in their original condition and packaging. Please contact our customer service for more details." },
      { question: "Can I get expert advice on choosing the right parts for my motorcycle?", answer: "Our team of experienced riders is always ready to assist you in finding the perfect parts for your specific motorcycle model and riding style." },
    ];
  
    const toggleFAQ = (index) => {
      setExpandedFAQs(prev => ({ ...prev, [index]: !prev[index] }));
    };
  
    return (
      <div className="container mx-auto px-4 py-8 bg-gray-800 text-white">
        <h1 className="text-4xl font-bold mb-8 text-center text-yellow-300">About RideUp</h1>
        
        <div className="flex justify-center mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-4 py-2 mx-2 rounded-t-lg ${activeTab === tab.id ? 'bg-gray-700 text-yellow-300' : 'bg-gray-600'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
  
        <div className="bg-gray-700 rounded-lg shadow-md p-6">
          {activeTab === 'about' && (
            <div>
              <img src="https://as2.ftcdn.net/v2/jpg/06/45/58/35/1000_F_645583564_rl4Vkhzn1JC5vcq0benbywu43uhzP4aK.jpg" alt="RideUp Team" className="w-full h-64 object-cover rounded-lg mb-6" />
              <p className="mb-4">
                RideUp is your premier destination for high-quality motorcycle accessories and parts. Founded by a group of passionate riders, we understand the thrill of the open road and the importance of having the right gear.
              </p>
              <p className="mb-4">
                Our mission is to provide motorcycle enthusiasts with top-notch products that enhance their riding experience, ensuring that every ride is safer, smoother, and more enjoyable.
              </p>
              <p className="mb-4">
                We pride ourselves on our extensive selection, competitive prices, and exceptional customer service. Our team of experts is always ready to assist you in finding the perfect parts for your ride.
              </p>
            </div>
          )}
  
          {activeTab === 'values' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">Our Values</h2>
              <ul className="list-disc list-inside mb-4">
                <li>Quality: We only offer products that meet our high standards of durability, performance, and reliability.</li>
                <li>Customer Satisfaction: Your happiness is our top priority.</li>
                <li>Expertise: Our team is knowledgeable and passionate about motorcycles.</li>
                <li>Community: We support and engage with the riding community, both locally and globally.</li>
              </ul>
            </div>
          )}
  
          {activeTab === 'testimonials' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">Customer Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="mb-2">"RideUp helped me find the perfect exhaust system for my bike. Their recommendations were spot on, and my bike has never sounded better. The team really knows their stuff!"</p>
                  <p className="text-yellow-300">- Alex R.</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="mb-2">"I've been shopping at RideUp for years, and every experience has been fantastic. Great products, excellent customer service, and fast shipping!"</p>
                  <p className="text-yellow-300">- Sarah W.</p>
                </div>
              </div>
            </div>
          )}
  
          {activeTab === 'faq' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">Frequently Asked Questions</h2>
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="flex justify-between items-center w-full text-left font-semibold bg-gray-800 p-4 rounded-lg"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span>{expandedFAQs[index] ? '−' : '+'}</span>
                  </button>
                  {expandedFAQs[index] && (
                    <div className="mt-2 p-4 bg-gray-600 rounded-lg">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default AboutUs;
  
  