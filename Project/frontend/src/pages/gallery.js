import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bikes = [
  { 
    id: 1, 
    name: 'Kawasaki Ninja ZX-10R', 
    brand: 'Kawasaki', 
    images: [
      'https://e0.pxfuel.com/wallpapers/495/835/desktop-wallpaper-iphone-zx10r-ninja-zx-10r.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqr6WMxb7Q1hHJRtPdYlJGLOf7jtf4sATdg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR09cp8DfV7H9o7EV21OLjE2c6GiZxazAanBA&s'
    ], 
    description: 'A high-performance supersport bike known for its track-focused design and advanced electronics package.'
  },
  { 
    id: 2, 
    name: 'Suzuki GSX-R1000', 
    brand: 'Suzuki', 
    images: [
      'https://images6.alphacoders.com/121/1213767.jpg',
      'https://w0.peakpx.com/wallpaper/663/119/HD-wallpaper-suzuki-gsx-r-1000-2017-bikes-sportbikes-japanese-motorcycles-suzuki.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReu8D0LOUqI2P9fBMcdjt8K-1yckLYheoBWg&s'
    ],
    description: 'A legendary superbike with a powerful engine and cutting-edge technology, built for both the track and the road.'
  },
  { 
    id: 3, 
    name: 'Ducati Panigale V4 R', 
    brand: 'Ducati', 
    images: [
      'https://w0.peakpx.com/wallpaper/123/164/HD-wallpaper-ducati-panigale-v4-ducati-panigale-v4-ducati-panigale-ducati.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJ8DYhs4XNYB2LHyInVJbfYM3FaUYpaOzh1Sk2KEUW0p5tEiQA-6zr5HTre0jfQn0VbA&usqp=CAU',
      'https://c4.wallpaperflare.com/wallpaper/1/552/963/superleggera-ducati-turquoise-panigale-v4-hd-wallpaper-preview.jpg'
    ],
    description: 'A race-bred superbike with cutting-edge aerodynamics and a powerful V4 engine, designed for both track and road use.'
  },
  { 
    id: 4, 
    name: 'Harley-Davidson Street Glide', 
    brand: 'Harley-Davidson', 
    images: [
      'https://cdn.dealerspike.com/imglib/v1/800x600/imglib/Assets/Inventory/DB/D3/DBD34143-3F9D-45D5-8AEB-44122F0FCF94.jpg',
      'https://wallpapers.com/images/hd/harley-davidson-street-glide-special-background-84i8cnaxbb2srbvj.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRfT25Nhj3CCl4wPKBx7xs3tAPWfSkeCVNqA&s'
      
    ],
    description: 'A classic American touring motorcycle, featuring a comfortable ride, iconic styling, and advanced infotainment system.'
  },
  { 
    id: 5, 
    name: 'BMW S 1000 RR', 
    brand: 'BMW', 
    images: [
      'https://images.unsplash.com/photo-1635073943212-f34dfbfcc3b0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJtdyUyMHMxMDAwcnJ8ZW58MHx8MHx8fDA%3D',
      'https://play-lh.googleusercontent.com/ijuZR5PzPkdLqDR0Ux-6h7nB64eq6xx5O1aPaUfhNBHQbtKl49DyKBg49ErTtp9G6g=w526-h296-rw',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg9T4jt8naG7LT90OxPnx--zfvOsKG4OftE1TjuvXWKr_wliH7aZsMEepiSdNyGZ5PgOM&usqp=CAU'
    ],
    description: 'A high-performance sport bike with a powerful inline-four engine, advanced electronics, and aerodynamic design.'
  },
  { 
    id: 6, 
    name: 'Yamaha YZF-R1', 
    brand: 'Yamaha', 
    images: [
      'https://wallpapercave.com/wp/wp6237970.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDne23PyHHj36aUX40pd835vXShgBi9BvCig&s',
      'https://backiee.com/static/wallpapers/1000x563/200547.jpg'
    ],
    description: 'A legendary superbike with MotoGP-derived technology, featuring a crossplane crankshaft engine and sophisticated electronics.'
  },
];

function Gallery() {
  const [selectedBike, setSelectedBike] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBikeClick = (bike) => {
    setSelectedBike(bike);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? selectedBike.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === selectedBike.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-yellow-300">Biker's Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bikes.map((bike) => (
          <div 
            key={bike.id} 
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => handleBikeClick(bike)}
          >
            <img src={bike.images[0]} alt={bike.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-yellow-300 mb-2">{bike.name}</h2>
              <p className="text-gray-400 mb-4">{bike.brand}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedBike && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg max-w-3xl w-full">
            <div className="relative">
            <img 
  src={selectedBike.images[currentImageIndex]} 
  alt={`${selectedBike.name} - view ${currentImageIndex + 1}`} 
  className="w-full h-64 object-cover rounded-t-lg"
/>

              <button 
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold text-yellow-300 mb-2">{selectedBike.name}</h2>
              <p className="text-gray-400 mb-4">{selectedBike.brand}</p>
              <p className="text-white mb-4">{selectedBike.description}</p>
              <button 
                onClick={() => setSelectedBike(null)}
                className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;