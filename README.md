# Project

Project is an online motorcycle parts and accessories store with a modern bike gallery, built using React, Node.js, Express, and MongoDB.

## Features

- 🏍️ Browse and search premium motorcycle parts by category (Wheels, Exhaust, Mirrors)
- 🛒 Add products to your cart and update quantities
- 📦 Fast and reliable checkout experience
- 🖼️ Explore a gallery of iconic bikes
- 📄 About Us, Testimonials, and FAQ sections
- Responsive, modern UI with Tailwind CSS

## Project Structure

```
Project/
  frontend/   # React frontend (src/, public/, etc.)
  server/     # Node.js/Express backend (controllers, models, routes)
```

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS, Axios
- **Backend:** Node.js, Express, MongoDB (via Mongoose)
- **Other:** Lucide React Icons

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/Project.git
   cd Project
   ```

2. **Install backend dependencies:**
   ```sh
   cd server
   npm install
   ```

3. **Install frontend dependencies:**
   ```sh
   cd ../frontend
   npm install
   ```

### Running the App Locally

1. **Start MongoDB**  
   Make sure your MongoDB server is running locally on `mongodb://localhost:27017/project` (or update the connection string in `server.js`).

2. **Start the backend server:**
   ```sh
   cd server
   npm start
   ```

3. **Start the frontend app:**
   ```sh
   cd ../frontend
   npm start
   ```
   The frontend will be available at [http://localhost:3000](http://localhost:3000).

## API Endpoints

- **Products:**  
  - `GET /api/products` — List all products  
  - `GET /api/products/:id` — Get product details  
  - `POST /api/products` — Add a new product  
  - `PUT /api/products/:id` — Update a product  
  - `DELETE /api/products/:id` — Delete a product

- **Cart:**  
  - `GET /api/cart/:userId` — Get user's cart  
  - `POST /api/cart/:userId/add` — Add item to cart  
  - `PUT /api/cart/:userId/update` — Update cart item quantity  
  - `DELETE /api/cart/:userId/remove/:productId` — Remove item from cart

## Customization

- Update product categories or add new ones in `server/models/Product.js`.
- Adjust frontend theme via `frontend/tailwind.config.js`.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE) (add a LICENSE file if needed)

---

Made with ❤️ for motorcycle enthusiasts.